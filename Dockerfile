FROM node:latest
WORKDIR /app
ENTRYPOINT ["docker-entrypoint.sh"]
COPY . .
EXPOSE 3000
CMD ["npm", "start"]