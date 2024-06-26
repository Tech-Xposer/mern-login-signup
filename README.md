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






## Dependencies

- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [lucide-react](https://ghub.io/lucide-react): A Lucide icon library package for React applications
- [prop-types](https://ghub.io/prop-types): Runtime type checking for React props and similar objects.
- [react](https://ghub.io/react): React is a JavaScript library for building user interfaces.
- [react-dom](https://ghub.io/react-dom): React package for working with the DOM.
- [react-lottie](https://ghub.io/react-lottie): lottie animation view for React
- [react-router-dom](https://ghub.io/react-router-dom): Declarative routing for React web applications
- [react-toastify](https://ghub.io/react-toastify): React notification made easy
- [underscore](https://ghub.io/underscore): JavaScript&#39;s functional programming helper library.

## Dev Dependencies

- [@types/react](https://ghub.io/@types/react): TypeScript definitions for react
- [@types/react-dom](https://ghub.io/@types/react-dom): TypeScript definitions for react-dom
- [@vitejs/plugin-react-swc](https://ghub.io/@vitejs/plugin-react-swc): Speed up your Vite dev server with SWC
- [autoprefixer](https://ghub.io/autoprefixer): Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-plugin-react](https://ghub.io/eslint-plugin-react): React specific linting rules for ESLint
- [eslint-plugin-react-hooks](https://ghub.io/eslint-plugin-react-hooks): ESLint rules for React Hooks
- [eslint-plugin-react-refresh](https://ghub.io/eslint-plugin-react-refresh): Validate that your components can safely be updated with fast refresh
- [postcss](https://ghub.io/postcss): Tool for transforming styles with JS plugins
- [tailwindcss](https://ghub.io/tailwindcss): A utility-first CSS framework for rapidly building custom user interfaces.
- [vite](https://ghub.io/vite): Native-ESM powered web dev build tool

##  Start the React application
```
npm run dev
```