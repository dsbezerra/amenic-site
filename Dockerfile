FROM node:8

RUN mkdir -p /opt/app
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

WORKDIR /opt/app
COPY . /opt/app

RUN yarn && yarn build

CMD [ "yarn", "start" ]
