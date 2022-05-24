FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm i bootstrap
COPY . .
EXPOSE 4000
CMD npm start