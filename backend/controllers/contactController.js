const Customer = require("../models/Customer");
const nodemailer = require("nodemailer");

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // VALIDATION

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // EMAIL REGEX VALIDATION

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    // SAVE TO DATABASE

    const newCustomer = await Customer.create({
      name,
      email,
      message,
    });

    // SMTP CONFIG

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // SEND MAIL

     await transporter.sendMail({
       
      from: process.env.EMAIL_USER,

      to: email,

      subject: "Thanks For Contacting Us ",

      html: `
        <h2>Hello ${name}</h2>

        <p>Thanks for contacting us.</p>

        <p>AAPKA bhut bhut shukriya.</p>

        <br/>

        <p>MY NAME IS RAYAN AHMAD aapse milke accha laga</p>

        <br/>

        <h4>Your Message:</h4>

        <p>${message}</p>
      `,
    
    });
   

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newCustomer,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  submitContact,
};