# Base: PHP 8.5 + extensions
FROM php:8.5.12-fpm AS base

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libfreetype-dev \
        libjpeg62-turbo-dev \
        libicu-dev \
        libpng-dev \
        libzip-dev \
        libxml2-dev \
        zip \
        unzip \
        imagemagick \
        libmagickwand-dev \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install \
        intl \
        pdo \
        pdo_mysql \
        zip \
        bcmath \
        exif \
        gd \
        xml \
        soap

# PIE (PHP Installer for Extensions) - replaces the deprecated pecl
COPY --from=ghcr.io/php/pie:1.5.2-bin /pie /usr/bin/pie

RUN pie install apcu/apcu:5.1.28 && \
    pie install imagick/imagick:3.8.1 && \
    rm -rf /root/.config/pie /root/.pie

WORKDIR /srv



# Build: adds composer, used for local dev (volumes in compose.yaml override app code)
FROM base AS build

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        git \
        ssh \
    && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV COMPOSER_ALLOW_SUPERUSER=1 COMPOSER_CACHE_DIR=/tmp/composer

COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer

COPY ./docker/php/dev.ini /usr/local/etc/php/conf.d/app.ini
