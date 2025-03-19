# Stage 1: Node.js for the backend API
FROM node:18 AS backend
WORKDIR /server
COPY /server .  
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]

# Stage 2: PHP for the back-office
FROM php:8.1-apache AS backoffice
WORKDIR /var/www/html
COPY /back-office /var/www/html/
EXPOSE 80

# Stage 3: Nginx for the frontend
FROM nginx:alpine AS frontend
WORKDIR /usr/share/nginx/html
COPY /public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
