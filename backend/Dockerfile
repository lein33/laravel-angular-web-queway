FROM php:8.2-fpm-alpine
RUN docker-php-ext-install pdo pdo_mysql
WORKDIR /var/www/html
COPY --chown=www-data:www-data . /var/www/html
RUN chmod -R 777 /var/www/html
USER www-data
