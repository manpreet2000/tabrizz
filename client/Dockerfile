FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

ENV PORT 8080

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]