const express = require("express");

const app = express();

const connectDatabase = require("./config/db");
const cors = require('cors');

app.use(express.json());
//Connecting to .env file (path to .env file)

require('dotenv').config();

connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
}) 


//Unhandled Promise Rejection
process.on("unhandledRejecation", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    })
})

app.use(
    cors({
      credentials: true,
      origin: "*"
    })
  );

//Route Imports
const todo = require("./routes/todoRoutes");
const todos = require("./routes/todoRoutes");
const completed = require("./routes/todoRoutes");

app.use("/api/v1",todo);
app.use("/api/v1",todos);
app.use("/api/v1",completed);

