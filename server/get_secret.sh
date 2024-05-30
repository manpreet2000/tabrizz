#!/bin/bash

# Get the secret from Secret Manager (replace placeholders)
gcloud secrets versions access latest --secret="firebase-service-account-key" > GOOGLE_APPLICATION_CREDENTIALS.json
