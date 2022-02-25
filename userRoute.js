const express = require("express");
const router = express.Router();
const {getOneUser} = require('./userController')


router.route('/users/:id').get(getOneUser);


module.exports = router;