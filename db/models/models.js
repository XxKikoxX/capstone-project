import mongoose from "mongoose";

const { Schema } = new Schema({
  checkintime: { type: String },
  location: { type: String },
  locationName: { type: String },
});

const checkin =mongoose.models.checkindata