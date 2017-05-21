#!/usr/bin/env bash

set -e
cd /app
if [ "$NODE_ENV" = 'development' ]; then
  echo "Running Development Server"
  npm install && npm run dev
else
  echo "Running Production Server"
  npm install && npm run build && npm run start
fi
