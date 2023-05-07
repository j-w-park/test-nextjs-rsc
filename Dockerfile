FROM node:18.16.0
WORKDIR /opt/app
COPY . .
RUN yarn build
ENTRYPOINT [ "yarn" ]
CMD [ "dev" ]
