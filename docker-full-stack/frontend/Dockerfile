FROM node:13.12.0-alpine
EXPOSE 8080
WORKDIR /usr/src/frontend
COPY package.json ./
COPY package-lock.json ./
COPY . .
ENV PORT=8080
RUN npm install --silent

CMD ["npm", "start"]

