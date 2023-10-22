FROM node:20.5

WORKDIR /home/www/html


COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
