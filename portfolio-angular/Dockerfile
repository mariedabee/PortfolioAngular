# Use an official Node.js runtime as a parent image for building the Angular app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Pass the API URL as an argument and set it in the environment
ARG API_URL
ENV API_URL=${API_URL}

# Copy the rest of your application code
COPY . .

# Update environment.prod.ts with the API URL during build
RUN sed -i "s|http://backend:3000|${API_URL}|g" src/environments/environment.prod.ts

# Build the Angular application
RUN yarn run build -- --configuration production

# Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy the Angular build output to the Nginx HTML directory
COPY --from=build /app/dist/portfolio-angular /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

