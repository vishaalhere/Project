// const fetch = require("node-fetch");
const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.DB_URL,
});

// const getOneUser = async (req, res) => {
//   const user = await fetch(`${process.env.DB_URL}/users/${req.params.id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//   res.status(200).json({
//     success: true,
//     user,
//   });
// };

const getOneUser = async (req, res) => {
  try {
    const user = await instance.get(`/users/${req.params.id}`);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getOneUser,
};

//   tahk.tech@
