const express = require("express");
const router = express.Router();

const { getAllTodos } = require("../controllers/todoController");

router.route("/todos").get(getAllTodos);

module.exports = router;
