FROM dr.chefkoch.net/chefkoch-design-system/base

MAINTAINER Team Geist <geist@chefkoch.de>

RUN apt-get update && apt-get install -yq nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
CMD ["/usr/sbin/nginx"]
EXPOSE 80
ADD nginx.conf /etc/nginx/
ADD web /app/web
