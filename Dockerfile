FROM node
WORKDIR /app
COPY package.json .
RUN npm i
RUN npm run dev
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]