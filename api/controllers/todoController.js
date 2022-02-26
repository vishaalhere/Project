const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.DB_URL,
});

//Get all Todos
// const getAllTodos = async (req, res) => {
//   const todos = await axios(`${process.env.DB_URL}/todos`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//   res.status(200).json({
//     message: "Route is wroking fine.Server is Running",
//     todos,
//   });
// };

const getAllTodos = async (req, res) => {
  try {
    const user = await instance.get(`/todos`);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTodos,
};
