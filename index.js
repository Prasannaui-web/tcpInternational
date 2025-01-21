const input = document.querySelector("#contactNumber");
window.intlTelInput(input, {
  initialCountry: "us", // Default country
  separateDialCode: true, // Separate dial code for better alignment
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.js",
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const amountScrolled = 600;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= amountScrolled) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Career Form
// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // you can use other services like 'outlook', 'yahoo', etc.
  auth: {
    user: "tcpprasanna@gmail.com", // replace with your email
    pass: "Prasanna@123", // replace with your email password or app password
  },
});

// Handle POST request for form submission
app.post("/career_form", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    location,
    position,
    portfolio,
    experience,
    description,
  } = req.body;

  // Create the email message
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@example.com", // replace with the email you want to send the form data to
    subject: "Career Form Submission",
    text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Contact Number: ${contactNumber}
            Location: ${location}
            Position: ${position}
            Portfolio: ${portfolio}
            Experience: ${experience} years
            Description: ${description}
        `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error in sending email");
    }
    console.log("Email sent: " + info.response);
    res.status(200).send("Form submitted successfully");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Contact Form

document.getElementById("contactNumber").addEventListener("focus", function () {
  document.querySelector(".contact-label").style.display = "none";
});

document.getElementById("contactNumber").addEventListener("blur", function () {
  if (!this.value) {
    document.querySelector(".contact-label").style.display = "block";
  }
});
