#stage 1
FROM node:12.18.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/oms-ui /usr/share/nginx/html
