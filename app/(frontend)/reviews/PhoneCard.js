"use client";
import React from "react";

const PhoneCard = ({ phoneDetails }) => {
  const {
    id,
    userName,
    company,
    model,
    price,
    battery,
    ram,
    rom,
    cameraRating,
    rating,
    review,
  } = phoneDetails;
  return (
    <li className="relative h-80 rounded-md border border-gray-500 p-2">
      <h2 className="text-center text-lg font-bold">{company}</h2>
      <h4 className="text-center font-semibold mb-1">{model}</h4>
      <div className="flex">
        <p className="font-medium w-32">Battery :</p>
        <p>{battery}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Ram :</p>
        <p>{ram}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Rom :</p>
        <p>{rom}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Price :</p>
        <p>{price}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">CameraRating :</p>
        <p>{`${cameraRating}/5`}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Rating :</p>
        <p>{`${rating}/5`}</p>
      </div>
      <div className="flex flex-wrap ">
        <p className="font-medium w-32">Review :</p>
        <p className="h-12 overflow-y-auto">{review}</p>
      </div>
      <p className="absolute bottom-0 right-0 font-medium text-gray-500 p-2">{`~ By ${userName}`}</p>
    </li>
  );
};

export default PhoneCard;
