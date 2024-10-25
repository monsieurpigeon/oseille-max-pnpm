FROM node:latest

# Set the working directory in the container
WORKDIR /app/server

# Copy the server package.json
COPY package.json .

# install dependencies
RUN npm install

# copy everything from my code to the dockerimage
COPY . .



EXPOSE 3333

CMD ["npm","run", "dev"]
