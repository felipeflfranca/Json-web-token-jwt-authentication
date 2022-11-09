FROM node:16

WORKDIR /usr/src/server

COPY package*.json ./

EXPOSE 3001

RUN yarn install

COPY . .

CMD ["yarn", "typeorm migration:run"]