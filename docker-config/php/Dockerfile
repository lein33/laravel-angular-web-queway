FROM php:8.2-fpm

# Update
RUN apt-get update && apt-get upgrade -y

# Install packages
RUN apt-get install -y zlib1g-dev  \
    libpq-dev  \
    libicu-dev  \
    libxml2-dev  \
    libzip-dev  \
    zip \
    gnupg \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl \
    && docker-php-ext-install pdo pdo_pgsql pgsql \
    && docker-php-ext-install zip \
    && docker-php-ext-install opcache

# Install Redis extension
RUN #pecl install -o -f redis apcu && rm -rf /tmp/pear && docker-php-ext-enable redis apcu

# Install Imagick
RUN apt-get install -y libmagickwand-dev; \
    pecl install imagick; \
    docker-php-ext-enable imagick;

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

## Install yarn
#RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
#RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
#RUN apt-get update && apt-get install -y yarn
#
## Install nodejs
#RUN curl -sL https://deb.nodesource.com/setup_19.x | bash - && \
#    apt-get install -y nodejs

# Eliminando log y contenedores intermedios
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

ENV TZ=America/Montevideo
RUN ln -snf /usr/share/leandro/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Add user for Symfony application
#RUN groupadd -g 1000 www
#RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
#COPY . /var/www

# Copy existing application directory permissions
#COPY --chown=www:www . /var/www

# Change current user to www
#USER www
WORKDIR /var/www/html
