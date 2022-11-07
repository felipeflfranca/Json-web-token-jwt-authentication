FROM node:16

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

RUN yarn install

CMD ["yarn", "web"]