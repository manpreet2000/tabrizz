FROM node:current-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies

RUN npm ci

# Bundle app source
COPY . .
COPY GOOGLE_APPLICATION_CREDENTIALS.json GOOGLE_APPLICATION_CREDENTIALS.json

# Build the TypeScript files
RUN npm run build

ENV PORT 8080
ENV NODE_ENV production
ENV GOOGLE_APPLICATION_CREDENTIALS GOOGLE_APPLICATION_CREDENTIALS.json
# Expose port 8080
EXPOSE 8080

# Start the app
CMD npm run start