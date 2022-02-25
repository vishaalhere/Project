const express = require("express");
const app = express();
const api =   process.env.DB_URL;

app.use(express.json())

//Route Imports
const todo = require("./todosRoute");
const user = require("./userRoute");

app.use('/api',todo);
app.use('/api',user);

module.exports = app;