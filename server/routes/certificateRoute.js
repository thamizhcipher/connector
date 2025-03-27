const express = require("express");
const multer = require("multer");
const path = require("path");
const Certificate = require("../models/certificate"); // Create this model

const router = express.Router();

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: "./uploads/certificates",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];
    if (allowedFormats.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, JPG, and PNG files are allowed."));
    }
  },
});

// Upload Certificate
router.post("/uploadcertificate", upload.single("file"), async (req, res) => {
  try {
    console.log("inside route");
    
    const { certificateDetails, name, date, place } = req.body;
    if (!req.file) return res.status(400).json({ error: "File is required" });

    const newCertificate = new Certificate({
      certificateDetails,
      name,
      date,
      place,
      filePath: `/uploads/certificates/${req.file.filename}`,
    });
    console.log("worling");
    
    await newCertificate.save();
    console.log("saved");
    
    res.status(201).json({ message: "Certificate uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All Certificates (For Admin)
router.get("/viewcertificate", async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
