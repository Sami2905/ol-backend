const express = require("express");
const Course = require("../models/course");
const router = express.Router();

// GET all courses
router.get("/", async (req, res) => {
  const data = await Course.find();
  res.json(data);
});

// OPTIONAL: add course (admin feature)
router.post("/add", async (req, res) => {
  await Course.create(req.body);
  res.json({ message: "Course added" });
});

module.exports = router;
