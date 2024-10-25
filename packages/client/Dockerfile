FROM node:latest

# Set the working directory in the container
WORKDIR /app/client

# Copy the client package.json
COPY package.json .

# install dependencies 
RUN npm install

# copy everything from my code to the dockerimage
COPY . .


EXPOSE 8080


CMD ["npm","run", "dev"]