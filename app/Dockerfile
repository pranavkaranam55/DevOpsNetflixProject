# Use Node 16 Alpine image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build production files
RUN npm run build

# Install serve to serve static build
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Run built app
CMD ["serve", "-s", "dist", "-l", "3000"]