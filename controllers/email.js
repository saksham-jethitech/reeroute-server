import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

//email config

// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.sendinblue.com",
//   port: 587,
//   secure: false,
//   service: "brevo",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
// });
const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  host: process.env.HOST,
  port: process.env.PORT,
  secure: false,
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const emailAddresses = process.env.EMAIL.split(",");

export const truckerHandler = async (req, res) => {
  try {
    const { mobileNumber, numberOfTrucks, city } = req.body;

    const emailBody = `
      Mobile Number: ${mobileNumber}
      Number of trucks: ${numberOfTrucks}
      City: ${city}
    `;

    // console.log(process.USER, process.PASS, emailAddresses);
    const mailOptions = {
      from: emailAddresses,
      to: process.env.USER,
      subject: "Trucker Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const careerHandler = async (req, res) => {
  try {
    const { fName, lName, mobile, email, role, date } = req.body;

    const emailBody = `
        First Name: ${fName}
        Last Name: ${lName}
        Email: ${email}
        Mobile No: ${mobile}
        Role: ${role}
        Start Date: ${date}
      `;

    const mailOptions = {
      from: process.env.EMAIL,
      to: "pm@jethitech.com",
      subject: "Career Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
