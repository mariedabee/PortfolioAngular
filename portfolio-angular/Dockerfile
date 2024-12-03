# Build stage
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

# Production stage
FROM node:18

# Copy the Angular build output to the working directory
COPY --from=build /app/dist/portfolio-angular/browser /app

# Install serve globally
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Start the application with serve
CMD ["serve", "-s", "/app", "-l", "80"]
