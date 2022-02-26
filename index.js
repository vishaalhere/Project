const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const api = process.env.DB_URL;
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route Imports
const todo = require("./api/routes/todosRoute");
const user = require("./api/routes/userRoute");

app.use("/api", todo);
app.use("/api", user);

//Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log("Shutting Down Server due to Uncaught Exception");
//   process.exit(1);
// });

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server is Woking on http://localhost:${port}`);
});

//Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log("Shutting Down Server due to Unhandled Promise Rejection");
//   server.close(() => {
//     process.exit(1);
//   });
// });
