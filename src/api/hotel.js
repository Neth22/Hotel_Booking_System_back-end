import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotelById,
  getHotels,
  patchHotel,
  updateHotel,
} from "../application/hotel.js";

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getHotels).post(createHotel);

hotelsRouter
  .route("/:_id")
  .get(getHotelById)
  .put(updateHotel)
  .patch(patchHotel)
  .delete(deleteHotel);

export default hotelsRouter;
