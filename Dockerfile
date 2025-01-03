# Use slim version instead of alpine
FROM node:18.19.0-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Set npm configurations
RUN npm config set legacy-peer-deps true \
    && npm config set strict-peer-dependencies false \
    && npm config set auto-install-peers true

# Install dependencies including dev dependencies (needed for build)
RUN npm ci

# Copy application files
COPY . .

# Build the application
RUN npm run build \
    && npm prune --production

# Set environment variables
ENV NODE_ENV=production \
    PORT=3000

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 