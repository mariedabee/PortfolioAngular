# Use a Node.js base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Install necessary build dependencies for bcrypt (and other native modules)
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    python3-pip \
    && apt-get clean

# Copy the package.json and package-lock.json files from the backend folder
COPY ./backend/package.json /app
COPY ./backend/package-lock.json /app

# Install backend dependencies, including bcrypt, forcing a rebuild from source
RUN npm install --build-from-source

# Copy all the backend files into the container (server.js, routes, models, etc.)
COPY ./backend /app

# Expose the backend port
EXPOSE 5000

# Command to run the backend app
CMD ["node", "server.js"]
