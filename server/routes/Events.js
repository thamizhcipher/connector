const express = require('express');
const router = express.Router();
const Event = require('../models/events');

// Fetch all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new event (Admin only)
router.post('/add_event', async (req, res) => {
    try {
        const { name, description, date, link } = req.body;
        const newEvent = new Event({ name, description, date, link });
        await newEvent.save();
        res.status(201).json({ message: "Event added successfully", event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
