const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as the email service
    auth: {
      user: 'rudrasekharreddy143@gmail.com', // Both sender and receiver email
      pass: 'Rudra@528' // Replace with your email password
    }
  });

  // Define email options
  const mailOptions = {
    from: 'rudrasekharreddy143@gmail.com', // Sender email
    to: 'rudrasekharreddy143@gmail.com',   // Receiver email (same as sender)
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }
    res.status(200).json({ message: 'Message sent successfully' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
