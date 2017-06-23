FROM debian:9

MAINTAINER Team Geist <geist@chefkoch.de>

ENV DEBIAN_FRONTEND noninteractive

RUN echo 'Europe/Berlin' > /etc/timezone && dpkg-reconfigure tzdata

RUN echo 'APT::Install-Recommends "0";' > /etc/apt/apt.conf.d/01recommends
RUN apt-get update && apt-get install -yq apt-utils apt-transport-https curl ca-certificates locales bzip2 xz-utils git openssh-client file gnupg2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN sed -r 's/^#\s*((en_US|de_DE).UTF-8 UTF-8)/\1/g' -i /etc/locale.gen && locale-gen
RUN update-locale LANG=en_US.UTF-8
