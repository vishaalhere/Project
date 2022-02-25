const express = require("express");
const { getAllTodos } = require("./todoController");

const router = express.Router();

router.route("/todos").get(getAllTodos);

module.exports = router;