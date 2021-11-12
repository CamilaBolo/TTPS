const express = require("express");

const {
	readUsuario,
	createUsuario,
	updateUsuario,
	deleteUsuario,
} = require("../controllers/Usuario");

const router = express.Router({mergeParams: true});

router.route("/").post(createUsuario);
router.route("/:id").get(readUsuario).put(updateUsuario).delete(deleteUsuario);
module.exports = router;