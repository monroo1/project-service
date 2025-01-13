# Этап 1: Установка зависимостей
FROM node:lts as dependencies
WORKDIR /client
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Этап 2: Сборка приложения
FROM node:lts as builder
WORKDIR /client
COPY . .
COPY --from=dependencies /client/node_modules ./node_modules
RUN npm run build

# Этап 3: Запуск приложения в продакшн-среде
FROM node:lts as runner
WORKDIR /client
ENV NODE_ENV production

COPY --from=builder /client/public ./public
COPY --from=builder /client/package.json ./package.json
COPY --from=builder /client/.next ./.next
COPY --from=builder /client/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]
