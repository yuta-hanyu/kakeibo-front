FROM node:14.18-alpine

# locale & timezone (Asia/Tokyo)
# https://github.com/moby/moby/issues/12084
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV ROOT_PATH /src/app
WORKDIR $ROOT_PATH

# system update
RUN apk update
RUN apk add --virtual .gyp python3 make g++ libc6-compat
# RUN npm install --global npm node-gyp

# copy application code from host.
# ADD ./app $ROOT_PATH

## install packages.
RUN npm install

ENV HOST 0.0.0.0
# EXPOSE 3000
CMD ["npm", "run", "dev"]
