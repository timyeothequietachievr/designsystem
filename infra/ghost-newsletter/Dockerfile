# Phase 7 only — deploy after basic Ghost works without R2.
# Connect this repo to Railway Ghost service when you need S3-compatible storage.
FROM ghost:6-alpine

USER root
WORKDIR /var/lib/ghost

RUN npm install ghost-storage-adapter-s3 && \
    mkdir -p content/adapters/storage && \
    cp -r node_modules/ghost-storage-adapter-s3 content/adapters/storage/s3

USER node
