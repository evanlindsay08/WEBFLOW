FROM node:18.19.0-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Create .npmrc with required configurations
RUN echo "legacy-peer-deps=true\nnode-version=18.19.0\nstrict-peer-dependencies=false\nauto-install-peers=true" > .npmrc

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 