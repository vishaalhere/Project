const axios = require("axios");

//Get all Todos
exports.getAllTodos = async (req, res) => {
  const todos = await axios(`${process.env.DB_URL}/todos`)
    .then((response) => response.json())
    .then((data) => console.log(data));

  res.status(200).json({
    message: "Route is wroking fine.Server is Running",
    todos,
  });
};
