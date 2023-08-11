import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: false,
  },
  battery: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  rom: {
    type: Number,
    required: true,
  },
  cameraRating: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
export const PhoneReview =
  mongoose.models.reviews || mongoose.model("reviews", ReviewSchema);
