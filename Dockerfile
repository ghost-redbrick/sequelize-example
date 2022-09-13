FROM node:lts-alpine
WORKDIR /root
COPY . .
RUN npm i
CMD ["npm", "run", "local"]