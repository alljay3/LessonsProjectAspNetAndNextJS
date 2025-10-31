# Стадия сборки
FROM node:20-alpine AS builder
WORKDIR /app

# Копируем package files
COPY package*.json ./
COPY eslint.config.mjs ./
COPY tsconfig.json ./
COPY next.config.ts ./

# Устанавливаем зависимости (чистая установка)
RUN npm ci --no-audit --no-fund

# Копируем исходный код
COPY . .

# Собираем приложение с оптимизацией
RUN npm run build

# Стадия запуска - используем минимальный образ
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Устанавливаем только системные зависимости которые нужны для работы
RUN apk add --no-cache curl

# Создаем непривилегированного пользователя
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Копируем только необходимые файлы
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Копируем standalone версию
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Очищаем кэш
RUN npm cache clean --force

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]