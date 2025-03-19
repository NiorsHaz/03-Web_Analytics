# Stage 1: Node.js for the backend API
FROM node:18 AS backend
WORKDIR /server
COPY /server .
RUN npm install
CMD ["node", "server.js"]

# Stage 2: PHP for the back-office
FROM php:8.1-apache AS backoffice
WORKDIR /var/www/html
COPY /back-office /var/www/html/

# Stage 3: Nginx for the frontend
FROM nginx:alpine AS frontend
WORKDIR /usr/share/nginx/html
COPY /public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose necessary ports
EXPOSE 80
EXPOSE 3000

# Use Docker Compose to orchestrate services
