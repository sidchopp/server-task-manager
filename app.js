const express = require('express');
const app = express();

const tasks = require('./routes/tasks')

//Middleware to get json data in req.body or we will get req.body as undefined
app.use(express.json());

//routes 
app.use("/api/v1/tasks", tasks)


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
})