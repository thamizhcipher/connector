const ping = require("ping");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/networkDB", { useNewUrlParser: true, useUnifiedTopology: true });

const NetworkLogSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    status: String
});
const NetworkLog = mongoose.model("NetworkLog", NetworkLogSchema);

// Email Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "210701275@rajalakshmi.edu.in",  // Change to actual email
        pass: "yhng lhvv wbyf swrt"         // Use an app password instead of your real password
    }
});

// Function to send email alert
const sendEmailAlert = async () => {
    await transporter.sendMail({
        from: '"Network Monitor" <your-email@gmail.com>',
        to: "210701288@rajalakshmi.edu.in",  // Change to the admin's email
        subject: "⚠ Network Alert",
        text: "Network is DOWN! Please check the issue."
    });
    console.log("⚠ Email Alert Sent!");
};

// Function to check network and log status
const checkNetwork = async () => {
    const res = await ping.promise.probe("127.0.0.1");  // Google DNS

    if (!res.alive) {  // Only store if network is down
        const log = new NetworkLog({ status: "DOWN" });
        await log.save();
        console.log("⚠ Network is DOWN! Logged in DB.");

        // Send alert email
        await sendEmailAlert();
    } else {
        console.log("✅ Network is UP.");
    }
};
 
// Run the check every 10 seconds
setInterval(checkNetwork, 10000);
