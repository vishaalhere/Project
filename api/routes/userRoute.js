const express = require("express");
const router = express.Router();
const { getOneUser } = require("../controllers/userController");

router.route("/users/:id").get(getOneUser);

module.exports = router;
