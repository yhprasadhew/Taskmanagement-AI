const express = require("express");
const router = express.Router();

const { createEmp, getEmp } = require("../controller/empcontroller");

router.get("/empList", getEmp);
router.post("/create", createEmp);

module.exports = router;