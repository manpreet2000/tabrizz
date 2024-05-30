FROM node:current-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN apt-get update && apt-get install -y python3
RUN apt-get update && apt-get install -y make build-essential

COPY get_secret.sh /get_secret.sh
RUN chmod +x /get_secret.sh
RUN /get_secret.sh


RUN npm ci

# Bundle app source
COPY . .

# Build the TypeScript files
RUN npm run build

ENV PORT 8080
ENV NODE_ENV production
ENV GOOGLE_APPLICATION_CREDENTIALS GOOGLE_APPLICATION_CREDENTIALS.json
# Expose port 8080
EXPOSE 8080

# Start the app
CMD npm run start