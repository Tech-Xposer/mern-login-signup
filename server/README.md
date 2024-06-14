# MERN Login Signup with User Management 

This project demonstrates a MERN (MongoDB, Express, React, Node.js) application that includes user login, signup, and password reset functionality.

## Features

- User signup
- User login
- Password reset via email link
- Token verification for password reset
- Secure password handling with bcrypt

## Technology Stack

- Frontend: React
- Backend: Node.js (Express)
- Database: MongoDB
- Email Service: Nodemailer

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Installation

Clone the repository from GitHub

```sh
git clone https://github.com/Tech-Xposer/mern-login-signup.git
```

## Run the Backend

```sh
cd server
npm install

```
Create a .env file in the backend directory with the following environment variables

```

MONGO_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_jwt_secret
ADMIN_MAIL=your_email
ADMIN_PASSWORD = ''
SECRET_TOKEN = '
CORS_ORIGIN= "http://localhost:3174"
BASE_URL='http://localhost:8001'
```

## Dependencies

- [bcrypt](https://ghub.io/bcrypt): A bcrypt library for NodeJS.
- [cookie-parser](https://ghub.io/cookie-parser): Parse HTTP request cookies
- [cors](https://ghub.io/cors): Node.js CORS middleware
- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [express-fileupload](https://ghub.io/express-fileupload): Simple express file upload middleware that wraps around Busboy
- [jsonwebtoken](https://ghub.io/jsonwebtoken): JSON Web Token implementation (symmetric and asymmetric)
- [mongoose](https://ghub.io/mongoose): Mongoose MongoDB ODM
- [morgan](https://ghub.io/morgan): HTTP request logger middleware for node.js
- [multer](https://ghub.io/multer): Middleware for handling `multipart/form-data`.
- [nodemailer](https://ghub.io/nodemailer): Easy as cake e-mail sending from your Node.js applications
- [validator](https://ghub.io/validator): String validation and sanitization

## Dev Dependencies

- [node-readme](https://ghub.io/node-readme): Generate your JS project README.md using an ES6 template
- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a Node.js app.
- [prettier](https://ghub.io/prettier): Prettier is an opinionated code formatter

## Run the Frontend
Navigate to the frontend directory and install dependencies:

```
cd client
npm install
```
Create a .env file in the frontend directory with the following environment variables:

```
REACT_APP_API_URL=http://localhost:5000 
```

##  Start the React application
```
npm run dev
```
## License

ISC
