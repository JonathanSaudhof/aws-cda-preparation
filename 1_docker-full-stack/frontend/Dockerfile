FROM node:13.12.0-alpine
EXPOSE 8080
WORKDIR /usr/src/frontend
COPY . .
ENV PORT=8080
RUN npm install --silent
RUN npm run build

FROM nginx
COPY ./build /usr/share/nginx/html

