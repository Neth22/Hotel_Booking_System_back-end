import express from "express";
import hotelsRouter from "./api/hotel.js";
import reviewRouter from "./api/review.js";
import connectDB from "./infrastructure/db.js";
import "dotenv/config";
const app = express();

app.use(express.json());

app.use("/api/hotels", hotelsRouter);
app.use("/api/reviews", reviewRouter);

connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is listing on port :", PORT);
});
