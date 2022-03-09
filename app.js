const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');

// mongoDB uri from .env
require('dotenv').config();

//Middleware to get json data in req.body or we will get req.body as undefined
app.use(express.json());

//routes 
app.use("/api/v1/tasks", tasks)

//Page not found route
app.use(notFound);


const PORT = 5000;
// Our server runs ONLY after it is connected with our mongoDB database
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    })
  } catch (error) {
    console.log(error);
  }
}

start();
