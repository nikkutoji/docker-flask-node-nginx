#!/bin/sh

# Wait for backend to be reachable
echo "⏳ Waiting for backend to be ready..."

while ! nc -z backend 5000; do
  echo "Backend not ready, retrying..."
  sleep 2
done

echo "✅ Backend is up! Starting NGINX..."
exec nginx -g "daemon off;"