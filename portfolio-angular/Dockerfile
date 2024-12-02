# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/dist/portfolio-angular /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
