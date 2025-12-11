import express from "express";
import hotelsRouter from "./api/hotel.js";
import connectDB from "./infrastructure/db.js";
import "dotenv/config";
const app = express();

app.use(express.json());

app.use("/api/hotels", hotelsRouter);

connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is listing on port :", PORT);
});
