FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
