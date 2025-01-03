# Use slim version instead of alpine
FROM node:18.19.0-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Set npm configurations (only using valid options)
RUN npm config set legacy-peer-deps true \
    && npm config set strict-ssl false \
    && npm config set fetch-retries 5

# Install dependencies including dev dependencies (needed for build)
RUN npm ci --legacy-peer-deps

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