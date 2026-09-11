# eval-trusted-types-with-react

React 19.3 で有効になった [Trusted Types API 連携](https://react.dev/blog/2026/09/09/react-19-3) を、
**Apache (Web プロキシ / SPA 配布 / CSP 付与) + Go (バックエンド) + React SPA** の構成で検証するための環境です。

```
 browser ──▶ apache (:8080) ──┬─▶ /19.3/<scenario>/  React 19.3 ビルド (静的配布 + CSP ヘッダ)
                              ├─▶ /19.2/<scenario>/  React 19.2 ビルド (比較用、同じソース)
                              └─▶ /api/*             ──▶ go backend (:8080, コンテナ内)
                                                          /api/html        “信頼できない” HTML を返す
                                                          /api/script.js   実行されたか観測できるスクリプト
                                                          /api/csp-report  report-uri の受け口 (保存 + ログ)
                                                          /api/reports     受信したレポート一覧 (GET / DELETE)
```

- CSP は **Apache 側だけ** で付与します (`proxy/scenarios/*.conf`)。SPA はヘッダを一切持ちません。
- SPA は Trusted Types のシンクに触るテストケースを順番に実行し、React 経由 / 素の DOM 経由の両方で
  「値がシンクに届いたか / TypeError になったか / `securitypolicyviolation` が飛んだか / default ポリシーが呼ばれたか」を表にします。
- 同じ SPA のソースを **react-dom 19.3.0 と 19.2.x の 2 回ビルド**して並べるので、19.3 で何が変わったかがそのまま見えます。
- 配布される SPA には **WebMCP** のツールを仕込んであり、対応ブラウザ (Chrome の早期プレビュー等) からエージェントが
  シナリオ切替・テスト実行・結果取得を行えます。
- `e2e/` の Playwright ランナーで「React バージョン × CSP シナリオ × ポリシー設定」の全組み合わせを自動実行し、
  Markdown の結果表を生成できます。

## 使い方

```sh
docker compose up --build        # http://localhost:8080 → /19.3/none/ にリダイレクト
```

| URL | 内容 |
|---|---|
| `http://localhost:8080/19.3/<scenario>/` | React 19.3 ビルド + シナリオの CSP |
| `http://localhost:8080/19.2/<scenario>/` | React 19.2 ビルド + シナリオの CSP |
| `http://localhost:8080/scenarios.json` | 起動時に `proxy/scenarios/*.conf` から生成されるシナリオ一覧 |
| `http://localhost:8080/api/reports` | バックエンドが受信した CSP 違反レポート |

ページ上部のピルで React バージョンとシナリオを切り替えられます。クエリパラメータでアプリ側の挙動も変えられます。

| クエリ | 意味 |
|---|---|
| `?policy=<name>` | アプリが作るポリシー名 (既定 `react-eval`)。`trusted-types` ディレクティブの許可リストと食い違わせる実験用 |
| `?default=sanitize` | `default` ポリシーも作る。`createHTML` は簡易サニタイザを通す |
| `?default=passthrough` | `default` ポリシーも作るが、値をそのまま返す (計測専用。React がどのシンクをどの値で叩くかが `default policy calls` 列に出る) |
| `?dup=1` | 同名ポリシーを 2 回作る (`'allow-duplicates'` の検証用) |
| `?autorun=0` | 自動実行しない |

CSP 違反レポートは `report-uri /api/csp-report` で Go バックエンドに届き、`docker compose logs backend` と
ページ下部の「CSP reports received by the Go backend」で確認できます。

### 全組み合わせを自動実行する

```sh
docker compose up -d --build
cd e2e && npm ci && npx playwright install chromium
node run.mjs                     # BASE_URL=http://localhost:8080 が既定
# → e2e/results/RESULTS.md, e2e/results/results.json
```

`ONLY=enforce,enforce-named node run.mjs` でシナリオを絞れます。`CHROMIUM_PATH=/path/to/chrome` で任意の Chromium を使えます。

## CSP シナリオ (`proxy/scenarios/`)

ファイル 1 つ = シナリオ 1 つです。追加したい設定があればファイルを置くだけで、起動時に
`/<version>/<scenario>/index.html` と `scenarios.json` が生成され、SPA のピルにも出てきます。
ファイル名先頭の `NN-` は並び順のためだけで、ID には含まれません。

| ID | ヘッダ | 見たいこと |
|---|---|---|
| `none` | なし | ベースライン。全シンクが文字列を受け付ける |
| `report-only` | `CSP-Report-Only: require-trusted-types-for 'script'` | 何も止まらないが、`disposition: report` の違反イベントとレポートが出る |
| `enforce` | `require-trusted-types-for 'script'` | シンク強制のみ。ポリシー名は自由 |
| `enforce-named` | `… ; trusted-types react-eval default` | ポリシー名の許可リスト。`?policy=other` は失敗する |
| `enforce-named-no-default` | `… ; trusted-types react-eval` | `default` が許可されないので `?default=…` の作成が失敗する |
| `enforce-allow-duplicates` | `… ; trusted-types react-eval default 'allow-duplicates'` | `?dup=1` の 2 回目の `createPolicy` が成功する |
| `enforce-no-policies` | `… ; trusted-types 'none'` | ポリシーが一切作れない。文字列ベースの処理はすべて不可 |
| `enforce-strict` | `… ; trusted-types react-eval default; script-src 'self'; object-src 'none'; base-uri 'none'` | 実運用に近い硬い CSP でも Vite ビルドの SPA が動くか |
| `enforce-with-report-only` | 強制 (`require-trusted-types-for`) + Report-Only (`trusted-types react-eval`) の併用 | 段階導入の形。名前制限は report のみ |
| `policy-names-only` | `trusted-types react-eval default` のみ | `require-trusted-types-for` が無いとシンクは強制されない |

## テストケース (`spa/src/cases/`)

### React 経由

| ID | 何をするか | react-dom の内部 |
|---|---|---|
| `react-dsih-string` | `dangerouslySetInnerHTML={{__html: "<b>…</b>"}}` | `el.innerHTML = …` (TrustedHTML シンク) |
| `react-dsih-trusted-html` | `__html: policy.createHTML(…)` | 同上。TrustedHTML オブジェクトがそのまま届くか |
| `react-dsih-backend-string` | Go の `/api/html` の文字列をそのまま `__html` に | XSS プローブ (`<img onerror>`) 入り |
| `react-dsih-backend-trusted` | `/api/html` を `policy.createHTML` 経由で | ポリシーのサニタイザが `onerror` を落とす |
| `react-script-inline` | `<script>{"…"}</script>` | 要素生成が `div.innerHTML = "<script></script>"` (**文字列**) |
| `react-script-text-trusted` | `<script>{policy.createScript(…)}</script>` | React が子要素にオブジェクトを許さない (#31) |
| `react-script-src-string` | `<script src="…">` (in-tree) | 上と同じ innerHTML 生成 + `setAttribute("src", string)` |
| `react-script-src-trusted` | `<script src={TrustedScriptURL}>` (in-tree) | 同上。src の型は通るが要素生成で止まる |
| `react-script-async-src-string` | `<script async src="…">` | hoist されて `createElement("script")` + `setAttribute` + `head.appendChild`。**実行される** |
| `react-script-async-src-trusted` | `<script async src={TrustedScriptURL}>` | hoist 条件が `typeof src === "string"` なので hoist されず in-tree 経路へ |
| `react-iframe-srcdoc-string` | `<iframe srcDoc="…">` | `setAttribute("srcdoc", string)` (TrustedHTML シンク) |
| `react-iframe-srcdoc-trusted` | `<iframe srcDoc={TrustedHTML}>` | 19.2 は `'' + value` で文字列化、19.3 はそのまま渡す |
| `react-a-href-string` | `<a href>` | 対照用。Trusted Types のシンクではない |

### 素の DOM (対照用)

`innerHTML` / `DOMParser.parseFromString` / `eval` / `setTimeout(string)` / `setAttribute("onclick")` /
`HTMLScriptElement.src` について、文字列と Trusted Types オブジェクトの両方を直接投げます。
ブラウザ自体の挙動なので、React 経由の結果と見比べるための基準になります。

### 結果の読み方

| 表示 | 意味 |
|---|---|
| ✅ `injected` | 値がシンクに届いて効果が出た (HTML が描画された、スクリプトが実行された…) |
| 🚫 `blocked` | 例外は出なかったが効果が出なかった |
| 💥 `error` | 例外が出た (ブラウザの TypeError が React の error boundary で捕まったもの、または React 自身のエラー) |
| ⏭ `skipped` | アプリのポリシーが作れなかったので実行できない |
| `(e)` / `(r)` | そのケースに紐づく `securitypolicyviolation` の数 (enforce / report) |

React 経由のケースで違反が **2 回** 出るのは、`dangerouslySetInnerHTML` や属性の設定が
render フェーズ (`completeWork` → `setInitialProperties`) で行われ、React が例外を受けて
**同期で 1 回リトライ**してから error boundary に落とすためです。1 ケースにつきシンクが 2 回叩かれています。

## WebMCP

SPA は起動時に `document.modelContext` (2026 年の仕様改訂後) または `navigator.modelContext`
(Chrome 146+ の早期プレビュー) を検出し、見つかれば次のツールを登録します (`spa/src/webmcp.ts`)。

| ツール | 内容 |
|---|---|
| `get_environment` | React バージョン、シナリオ、Apache が返した CSP ヘッダ、ポリシー生成の結果 |
| `list_scenarios` / `list_cases` | シナリオ一覧 (URL 付き) / テストケース一覧 |
| `run_tests` | ケースを実行して結果を返す (`ids` で絞り込み可) |
| `get_results` / `get_violations` | 最新の結果 / ページで観測した違反イベント |
| `get_server_reports` / `clear_server_reports` | Go バックエンドに届いた CSP レポートの取得 / 削除 |
| `navigate` | 別の React ビルド・シナリオ・オプションへ遷移 |

戻り値は MCP 互換の `{ content: [{ type: "text", text }] }` です。オプションフォームには宣言的 API 用の
`toolname` / `tooldescription` / `toolparamdescription` 属性も付けてあります。

前提:

- WebMCP は secure context 必須です。`http://localhost` は secure context 扱いなので compose 構成のままで使えます。
- Chrome では `chrome://flags/#enable-webmcp-testing` (146+) を有効化し、
  Model Context Tool Inspector 拡張などから登録済みツールを確認できます。
- 未対応ブラウザでは「WebMCP: not available」と表示されるだけで、Trusted Types の検証には影響しません。
- ツール登録自体は Trusted Types のシンクに触れないため、どのシナリオでも登録できます。

## 開発メモ

- `spa/` は Vite + React + TypeScript。`npm run dev` はバックエンドを `localhost:8080` に想定 (`vite.config.ts` の proxy)。
- `proxy/Dockerfile` (ビルドコンテキストはリポジトリルート) が SPA を 2 回ビルドし (19.3 → `npm install react@19.2` → 19.2)、`httpd:2.4-alpine` に載せます。
- コンテナを使わずに検証する場合は `proxy/docker-entrypoint.sh` を `HTDOCS` / `SCENARIOS` / `HTTPD_BIN` で差し替えて起動できます。
- ポリシー内のサニタイザは検証用の簡易実装です。実アプリでは DOMPurify (`RETURN_TRUSTED_TYPE: true`) などを使ってください。

## 参考

- [React 19.3 リリースノート](https://react.dev/blog/2026/09/09/react-19-3) / [v19.3.0 release](https://github.com/react/react/releases/tag/v19.3.0)
- [Enable Trusted Types API integration (facebook/react#35816)](https://github.com/facebook/react/pull/35816)
- [Trusted Types API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API)
- [WebMCP explainer (webmachinelearning/webmcp)](https://github.com/webmachinelearning/webmcp) / [Chrome: WebMCP](https://developer.chrome.com/docs/ai/webmcp)
