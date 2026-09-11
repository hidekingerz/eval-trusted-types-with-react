# syntax=docker/dockerfile:1
# Build context is the repository root (see docker-compose.yml).

# ---- SPA: React 19.3 (the version under test) ----------------------------
FROM node:22-alpine AS spa-19.3
WORKDIR /spa
COPY spa/package.json spa/package-lock.json ./
RUN npm ci
COPY spa/ ./
RUN npm run build -- --base=/19.3/ --outDir=dist/19.3

# ---- SPA: React 19.2 (previous minor, for comparison) --------------------
FROM spa-19.3 AS spa-19.2
RUN npm install --no-save --no-audit --no-fund react@19.2 react-dom@19.2 \
 && node -e "console.log('react', require('react/package.json').version)" \
 && npm run build -- --base=/19.2/ --outDir=dist/19.2

# ---- Apache ---------------------------------------------------------------
FROM httpd:2.4-alpine
COPY proxy/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY proxy/scenarios/ /usr/local/apache2/conf/scenarios/
COPY proxy/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN rm -rf /usr/local/apache2/htdocs/* && chmod +x /usr/local/bin/docker-entrypoint.sh
COPY --from=spa-19.3 /spa/dist/19.3/ /usr/local/apache2/htdocs/19.3/
COPY --from=spa-19.2 /spa/dist/19.2/ /usr/local/apache2/htdocs/19.2/
EXPOSE 80
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
