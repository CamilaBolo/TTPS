const express = require("express");

const {
    readPaciente,
    createPaciente,
    updatePaciente,
    deletePaciente,
} = require("../controllers/Paciente");

const router = express.Router({ mergeParams: true });

router.route("/").post(createPaciente);
router.route("/:id").get(readPaciente).put(updatePaciente).delete(deletePaciente);
module.exports = router;
