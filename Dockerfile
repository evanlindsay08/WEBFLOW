# Use Node.js 18 Alpine as base image
FROM node:18.19.0-alpine

# Add necessary build dependencies
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Set npm configurations directly
RUN npm config set legacy-peer-deps true \
    && npm config set strict-peer-dependencies false \
    && npm config set auto-install-peers true

# Install dependencies
RUN npm ci --only=production --no-audit

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 