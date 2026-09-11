# Convenience targets. Everything can also be run with plain docker compose.

.PHONY: up down logs build e2e typecheck

up:            ## build images and start apache + go backend on http://localhost:8080
	docker compose up --build

down:
	docker compose down

logs:
	docker compose logs -f

build:
	docker compose build

typecheck:
	cd spa && npm ci && npm run typecheck

# Runs the whole matrix in headless Chromium and writes e2e/results/RESULTS.md
e2e:
	cd e2e && npm ci && npx playwright install chromium && BASE_URL=$${BASE_URL:-http://localhost:8080} node run.mjs
