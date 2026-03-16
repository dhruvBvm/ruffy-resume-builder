import express from "express";
import cors from "cors";
import router from "./src/routes/index.mjs";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.MONGO_URI,
  )
  .then((result) => {
    console.log("Connected to MONGODB server");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  req.cookies;
  res.status(200).send("hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});



