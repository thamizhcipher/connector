const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Fetch all courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new course (Admin only)
router.post('/add_course', async (req, res) => {
    try {
        const { name, description, link } = req.body;
        const newCourse = new Course({ name, description, link });
        await newCourse.save();
        res.status(201).json({ message: "Course added successfully", course: newCourse });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
