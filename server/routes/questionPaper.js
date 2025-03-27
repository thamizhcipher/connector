const express = require("express");
const multer = require("multer");
const path = require("path");
const QuestionPaper = require("../models/questionPaper"); // Import model

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: "./uploads/question_papers", // Store PDFs in "uploads/question_papers"
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Admin Upload Route
router.post("/uploadQP", upload.single("file"), async (req, res) => {
    try {
        const { subject, year } = req.body;
        if (!req.file) return res.status(400).json({ error: "No file uploaded" });

        const newQP = new QuestionPaper({
            subject,
            year,
            filePath: `/uploads/question_papers/${req.file.filename}`
        });

        await newQP.save();
        res.json({ message: "Question Paper uploaded successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Error uploading question paper" });
    }
});

router.get("/fetchQP", async (req, res) => {
    try {
        const { subject, year } = req.query;

        // const questionPaper = await QuestionPaper.findOne({ subject, year });
        // console.log("Found Question Papers:", questionPapers);
        const query = {
            subject: new RegExp(`^${subject}$`, "i"), // Case insensitive match
            year: parseInt(year)  // Convert string to number
        };

        const questionPaper = await QuestionPaper.findOne(query);


        if (!questionPaper) {
            return res.status(404).json({ message: "No Question Paper found" });
        }

        res.json({ filePath: questionPaper.filePath });
    } catch (err) {
        res.status(500).json({ error: "Error fetching question paper" });
    }
});

router.get("/subjects-years", async (req, res) => {
    try {
      const subjects = await QuestionPaper.distinct("subject");
      const years = await QuestionPaper.distinct("year");
      res.json({ subjects, years });
    } catch (error) {
      console.error("Error fetching subjects and years:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

module.exports = router;
