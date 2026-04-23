# Use lightweight Node.js base image (Optimization: Small attack surface)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json first to leverage Docker cache (Optimization: Layer caching)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Use a non-root user (Security best practice)
USER node

# Start the application
CMD ["npm", "start"]
