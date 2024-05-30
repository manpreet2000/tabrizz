FROM node:current-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies

RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - && \
    echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && \
    apt-get update -y && \
    apt-get install google-cloud-sdk -y
RUN apt-get update && apt-get install -y python3
RUN apt-get update && apt-get install -y make build-essential

COPY get_secret.sh /get_secret.sh
RUN chmod +x /get_secret.sh
ENV PATH $PATH:/google-cloud-sdk/bin
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