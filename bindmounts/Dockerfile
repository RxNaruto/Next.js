FROM node:19.5.0-alpine

WORKDIR /nextapp

COPY packages* .

RUN npm install

COPY . .

CMD ["npm","run","dev"]