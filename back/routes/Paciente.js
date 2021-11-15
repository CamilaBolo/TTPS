const express = require("express");

const {
	readPaciente,
	createPaciente,
	updatePaciente,
	deletePaciente,
	getPacientes
} = require("../controllers/Paciente");

const router = express.Router({mergeParams: true});

router.route("/").post(createPaciente).get(getPacientes);
router.route("/:id").get(readPaciente).put(updatePaciente).delete(deletePaciente);
module.exports = router;