const express = require("express");

const {
    readEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} = require("../controllers/Employee");

const router = express.Router({ mergeParams: true });

router.route("/").post(createEmployee);
router.route("/:id").get(readEmployee).put(updateEmployee).delete(deleteEmployee);
module.exports = router;
