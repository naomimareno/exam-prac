#!/bin/bash

# ShelfLife - Book Club Tracker
# Start script for development

echo "Starting ShelfLife development server..."
echo "Node version: $(node -v)"
echo "npm version: $(npm -v)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the development server
echo "Starting development server on http://localhost:3000"
npm run dev
