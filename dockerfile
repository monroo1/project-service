FROM node:18-alpine

WORKDIR /client

COPY . .

RUN npm install --frozen-lockfile

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000
CMD ["npm", "run", "start"]
