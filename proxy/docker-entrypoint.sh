#!/bin/sh
# Materialise /<react-version>/<scenario>/index.html for every scenario file
# and every SPA build, then write /scenarios.json for the SPA, then start httpd.
set -eu

# Overridable so the same script can drive a non-container httpd during development.
HTDOCS="${HTDOCS:-/usr/local/apache2/htdocs}"
SCENARIOS="${SCENARIOS:-/usr/local/apache2/conf/scenarios}"
HTTPD_BIN="${HTTPD_BIN:-httpd}"

versions=""
for dir in "$HTDOCS"/*/; do
  v=$(basename "$dir")
  [ -f "$dir/index.html" ] || continue
  versions="$versions $v"
done

json='{"versions":['
first=1
for v in $versions; do
  [ $first -eq 1 ] || json="$json,"
  first=0
  json="$json\"$v\""
done
json="$json],\"scenarios\":["

first=1
for f in "$SCENARIOS"/*.conf; do
  # "NN-" filename prefixes only order the list; they are not part of the id.
  name=$(basename "$f" .conf | sed 's/^[0-9]*-//')
  desc=$(sed -n '1s/^# *//p' "$f" | sed 's/\\/\\\\/g; s/"/\\"/g')
  for v in $versions; do
    mkdir -p "$HTDOCS/$v/$name"
    cp "$HTDOCS/$v/index.html" "$HTDOCS/$v/$name/index.html"
  done
  [ $first -eq 1 ] || json="$json,"
  first=0
  json="$json{\"id\":\"$name\",\"description\":\"$desc\"}"
done
json="$json]}"
printf '%s\n' "$json" > "$HTDOCS/scenarios.json"

echo "scenarios: $(printf '%s' "$json" | tr -d '\n')"
export BACKEND_UPSTREAM="${BACKEND_UPSTREAM:-backend:8080}"
exec "$HTTPD_BIN" -DFOREGROUND "$@"
