const express = require("express");

const {
	readEstudio,
	createEstudio,
	updateEstudio,
	deleteEstudio,
	getEstudios
} = require("../controllers/Estudio");

const router = express.Router({mergeParams: true});

router.route("/").post(createEstudio).get(getEstudios);
router.route("/:id").get(readEstudio).put(updateEstudio).delete(deleteEstudio);
module.exports = router;