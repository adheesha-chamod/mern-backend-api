# MERN Backend API

This includes:

- Backend API with Express & MongoDB
- Routes for login, logout, register, profile and update profile
- JWT authentication stored in HTTP-only cookie
- Protected routes and endpoints
- Custom middleware to check JSON web token and store in cookie
- Custom error middleware

### Prerequisites

- Install LTS version of Node.js - [Node.js](https://nodejs.org/en/)
- Create a database in MongoDB Atlas and obtain `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Env Variables

Rename the `.env-example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 8000
MONGO_URI = your mongodb uri
JWT_SECRET = your jwt secret
```

### Install Dependencies

In root, execute the following command

```
npm install
```

### Run Server

```
npm run server
```