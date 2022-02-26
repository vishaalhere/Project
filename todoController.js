const axios = require("axios");
const fetch = require("node-fetch");

function replacer(key, value) {
  if (key == "userId") return undefined;
  else return value;
}

//Get all Todos

exports.getAllTodos = async (req, res) => {
  const response = await fetch(`${process.env.DB_URL}/todos`);
  const todos = await response.json();

  res.status(200).json({
    message: "Successfully fetched all todos",
    todos,
  });
  // const todos = await axios(`${process.env.DB_URL}/todos`)

  // console.log(todos + "Hello");
  // res.status(200).json({
  //   message: "Route is wroking fine.Server is Running",
  //   todos,
  // });
};

// const getAllTodos = async (req, res) => {
//   const response = await fetch('http://localhost:3000/todos')
//   const todos = await response.json()

//   res.status(200).json({
//     message: "Successfully fetched all todos",
//     data: todos
//   })
// }
