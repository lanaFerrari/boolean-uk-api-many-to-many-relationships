const express = require("express");
const { getDoctorAndAppointment } = require("./controller")

const router = express.Router();

router.get("/:id/appointments", getDoctorAndAppointment)

module.exports = router;