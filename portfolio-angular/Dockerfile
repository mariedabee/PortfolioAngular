# Use an official Node.js runtime as a parent image for building the Angular app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for the Angular app
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app in production mode
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's default public directory
COPY --from=build /app/dist/portfolio-angular /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Optionally, set the default command for the container to run nginx
CMD ["nginx", "-g", "daemon off;"]
