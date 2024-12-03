# Use an official Node.js runtime as a parent image for building the Angular app
FROM node:18 AS build

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --legacy-peer-deps

COPY . .

RUN yarn run build -- --configuration production

# Install `serve` to serve the Angular app
RUN yarn global add serve

# Expose port 5000 (default port for `serve`)
EXPOSE 5000

# Serve the Angular app
CMD ["serve", "-s", "dist/portfolio-angular", "-l", "5000"]
