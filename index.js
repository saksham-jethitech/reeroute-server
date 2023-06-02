import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import emailRoutes from "./routes/email.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/email", emailRoutes);

const startServer = async () => {
  try {
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port http://localhost:${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
