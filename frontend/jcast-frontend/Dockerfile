# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Install serve globally
RUN npm install -g serve

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 5000

# Run the app
CMD ["serve", "-s", "build", "-l", "5000"]
