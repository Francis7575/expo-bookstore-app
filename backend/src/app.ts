import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.routes";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
