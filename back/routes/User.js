const express = require("express");

const {
	findUser,
	readUser,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/User");

const router = express.Router({mergeParams: true});

router.route("/").post(findUser);
module.exports = router;