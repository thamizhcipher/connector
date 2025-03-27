const mongoose = require("mongoose");

const questionPaperSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    year: { type: Number, required: true },
    filePath: { type: String, required: true }, // Stores file path or URL
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuestionPaper", questionPaperSchema);
