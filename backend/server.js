// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());  // Enable CORS for all routes

// app.post('/contact', (req, res) => {
//   const { name, email } = req.body;

//   if (!name || !email) {
//     return res.status(400).json({ error: 'Name and email are required' });
//   }

//   // Create a transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', // Using Gmail as the email service
//     auth: {
//       user: 'samuel.skillrise@gmail.com', // Both sender and receiver email
//       pass: 'ulpqfbsksnrggzit' // Replace with your email password
//     }
//   });

//   // Define email options
//   const mailOptions = {
//     from: 'samuel.skillrise@gmail.com', // Sender email
//     to: 'samuel.skillrise@gmail.com', email,  // Receiver email (same as sender)
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}`
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ error: 'Failed to send message' });
//     }
//     res.status(200).json({ message: 'Message sent successfully' });
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as the email service
    auth: {
      user: 'samuel.skillrise@gmail.com', // Both sender and receiver email
      pass: 'ulpqfbsksnrggzit' // Replace with your email password or app-specific password
    }
  });

  // Define email options for admin
  const adminMailOptions = {
    from: 'samuel.skillrise@gmail.com', // Sender email
    to: 'samuel.skillrise@gmail.com',   // Admin email
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Define email options for user confirmation
  const userMailOptions = {
    from: 'samuel.skillrise@gmail.com', // Sender email
    to: email,   // User's email
    subject: 'Thank you for contacting us',
    text: `Hi ${name},\n\nThank you for getting in touch with us. We have received your message and will get back to you soon.\n\nBest regards,\nSkillRise Team`
  };

  // Send email to admin
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email to admin:', error);
      return res.status(500).json({ error: 'Failed to send message to admin' });
    }
    console.log('Admin email sent: ' + info.response);

    // Send confirmation email to user
    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending confirmation email to user:', error);
        return res.status(500).json({ error: 'Failed to send confirmation email to user' });
      }
      console.log('User confirmation email sent: ' + info.response);
      res.status(200).json({ message: 'Message and confirmation email sent successfully' });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
