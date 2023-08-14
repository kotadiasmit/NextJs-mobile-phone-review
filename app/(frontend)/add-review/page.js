import React from "react";
import ReviewForm from "../Form/reviewForm";

const addReview = () => {
  const initialState = {
    userName: "",
    company: "",
    model: "",
    price: "",
    battery: "",
    ram: "",
    rom: "",
    cameraRating: "",
    rating: "",
    review: "",
  };
  return (
    <div>
      <ReviewForm initialState={initialState} />
    </div>
  );
};

export default addReview;
