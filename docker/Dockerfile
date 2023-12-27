# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR ./

# Copy package.json and package-lock.json to the working directory
COPY ../*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the working directory
COPY ../public/ ./public
COPY ../src/ ./src

# Define the command to run your application
CMD ["npm", "start"]