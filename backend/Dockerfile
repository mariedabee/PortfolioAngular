# Use a Node.js base image
FROM node:16
# Set the working directory 
WORKDIR /app 
# Copy package.json and yarn.lock 
COPY package*.json yarn.lock ./ 
#  Install dependencies using Yarn 
RUN yarn install 
# Copy the rest of your application code 
COPY . . 
# Expose port (replace with the actual port your app uses) 
EXPOSE 3000 
# Start the Node.js server 
CMD ["yarn", "start"]