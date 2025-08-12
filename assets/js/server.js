// server.js
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());

// Contact form endpoint
app.post("/send-mail", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "info@srdenergy.com", // your email
            pass: process.env.SMTP_PASS // store in .env
        }
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "info@srdenergy.com",
            subject: "New Contact Form Submission",
            html: `
                <h2>New Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        res.json({ message: "Message sent successfully ✅" });
    } catch (error) {
        res.status(500).json({ message: "Message could not be sent ❌" });
    }
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000..."));
