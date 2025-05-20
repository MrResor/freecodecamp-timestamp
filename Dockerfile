FROM node:slim
COPY package.json package.json
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "run", "start"]