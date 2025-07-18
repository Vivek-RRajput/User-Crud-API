FROM node:18

# Install mysql client
RUN apt-get update && apt-get install -y default-mysql-client

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-db.sh .
RUN chmod +x wait-for-db.sh

EXPOSE 3000

CMD ["./wait-for-db.sh", "npm", "start"]
