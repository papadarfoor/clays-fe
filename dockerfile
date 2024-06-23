FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV HOST=0.0.0.0
EXPOSE 5173

CMD ["npm", "start"]
