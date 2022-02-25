const app = require("./app");
const dotenv = require("dotenv");

//Config
dotenv.config({ path: "./config.env" });

//Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log("Shutting Down Server due to Uncaught Exception");
//   process.exit(1);
// });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is Woking on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log("Shutting Down Server due to Unhandled Promise Rejection");
//   server.close(() => {
//     process.exit(1);
//   });
// });
