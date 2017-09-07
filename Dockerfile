FROM node:6
RUN mkdir -p /opt/chimp
WORKDIR /var/www/los-bichanos
RUN npm install --verbose
