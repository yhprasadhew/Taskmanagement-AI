const express = require("express");

const router = express.Router();

const {
  recommendEmployee,
} = require("../controller/aiController");

router.post("/recommend", recommendEmployee);

module.exports = router;