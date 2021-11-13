const express = require("express");

const {
	readEstudio,
	createEstudio,
	updateEstudio,
	deleteEstudio,
} = require("../controllers/Estudio");

const router = express.Router({mergeParams: true});

router.route("/").post(createEstudio);
router.route("/:id").get(readEstudio).put(updateEstudio).delete(deleteEstudio);
module.exports = router;