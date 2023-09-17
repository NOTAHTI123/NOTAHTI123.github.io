FROM node
WORKDIR /app
COPY package.json .
RUN pnpm install
RUN pnpm run dev
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "pnpm", "run", "dev"]