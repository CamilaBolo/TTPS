const express = require("express");

const {
    findAdmin
} = require("../controllers/Admin");

const router = express.Router({ mergeParams: true });

router.route("/").get(findAdmin);
module.exports = router; 