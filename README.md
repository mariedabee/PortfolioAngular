# PortfolioAngular
## Overview

This project is a web application built with Angular for the frontend and Node.js for the backend. It includes user authentication features such as signup and login, as well as functionalities for submitting contact forms and suggestions.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Node.js, Express
- **Database**: MongoDB (or any database you are using)
- **Other Libraries**: bcrypt, cors, nodemailer (as applicable)

## API Endpoints

### Authentication

- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### Contact Form

- **POST /api/send-contact-email**: Handle contact form submissions. 
  - **Request Body**: 
    - `name`: User's name
    - `email`: User's email
    - `message`: Message content

### Mental Illnesses

- **GET /api/mental-illnesses**: Fetch and search mental illnesses.
  - **Query Parameters**: 
    - `search`: Optional search term to filter results.

### Suggestions

- **GET /api/suggestions**: Fetch all suggestions.
- **POST /api/suggestions**: Submit a new suggestion.
  - **Request Body**:
    - `suggestion`: Text of the suggestion.
- **POST /api/suggestions/:id/comments**: Add a comment to a specific suggestion.
  - **Request Body**:
    - `text`: Comment content.
- **POST /api/suggestions/:id/like**: Like a specific suggestion.

## Configuration

- To modify the API base URL, update the `src/app/api.config.ts` file.
- Ensure your Node.js backend is running on the specified port.






# to showcase mental health cards, insert some example data in your database:
- make sure you have a local mongo DB connection:
- DB name = mentalHealthApp
- collecction name = mentalIllnesses
- insert some data => db.mentalIllnesses.insertMany([
    {
        name: "Anxiety Disorder",
        description: "",
        prevalence: "Global prevalence is estimated to be around 7.3%.",
        keywords: ["Anxiety", "Fear", "Worry"]
    },
    {
        name: "Depression",
        description: "",
        keywords: ["Depression", "Sadness", "Loss of interest"]
    },

])


