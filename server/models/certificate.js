const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  certificateDetails: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  place: { type: String, required: true },
  filePath: { type: String, required: true },
});

module.exports = mongoose.model("Certificate", CertificateSchema);
