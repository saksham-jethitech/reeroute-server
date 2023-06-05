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

export const shipperHandler = async (req, res) => {
  try {
    const {
      fromCity,
      toCity,
      materialWeight,
      vehicleType,
      truckLength,
      truckHeight,
    } = req.body;

    const emailBody = `
        Origin City: ${fromCity}
        Destination City: ${toCity}
        Material Weight: ${materialWeight}
        Vehicle Type: ${vehicleType}
        Truck Length: ${truckLength}
        Truck Height: ${truckHeight}
      `;

    // console.log(process.USER, process.PASS, emailAddresses);
    const mailOptions = {
      from: emailAddresses,
      to: process.env.USER,
      subject: "Shipper Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const contactUsHandler = async (req, res) => {
  try {
    const { name, email, phoneNumber, city, message } = req.body;

    const emailBody = `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        City: ${city}
        message: ${message}
      `;

    // console.log(process.USER, process.PASS, emailAddresses);
    const mailOptions = {
      from: emailAddresses,
      to: process.env.USER,
      subject: "Contact Us Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const CarrerHandler = async (req, res) => {
  try {
    const { name, email, mobileNumber, department } = req.body;

    const emailBody = `
        Name: ${name}
        Email: ${email}
        Phone Number: ${mobileNumber}
        Department: ${department}
      `;

    // console.log(process.USER, process.PASS, emailAddresses);
    const mailOptions = {
      from: emailAddresses,
      to: process.env.USER,
      subject: "Carrer Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
