"use client";
import { useState } from "react";
import FormInput from "./formInput";
import { addReview } from "../utils/apis";

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

const AddReview = () => {
  const [reviewObj, setReviewObj] = useState(initialState);
  const [successMsg, setSuccessMsg] = useState({ msg: "", success: false });
  const onInputChanged = (name, value) => {
    setReviewObj((prevData) => ({ ...prevData, [name]: value }));
  };
  const submitForm = async (event) => {
    event.preventDefault();
    const response = await addReview(reviewObj);
    console.log(response, 123);
    setSuccessMsg({
      msg: response.success ? response.result : "Please provide valid details",
      success: response.success,
    });
    if (response.success) {
      setReviewObj(initialState);
      setTimeout(() => {
        setSuccessMsg({ msg: "", success: false });
      }, 10000);
    }
  };
  return (
    <div className="min-h-[calc(100vh-56px)] w-100 p-5">
      <h1 className="text-center font-bold mb-10 text-2xl text-slate-500 dark:text-slate-400">
        Add your Mobile Phone&apos;s valuable review
      </h1>
      <form
        // flex flex-col md:flex-row justify-around items-center
        className="flex flex-col justify-center items-center w-full"
        onSubmit={submitForm}
      >
        <div className="flex flex-col md:flex-row justify-around items-center w-full">
          <div>
            <FormInput
              id="userName"
              type="text"
              placeholder="username"
              autoFocus={true}
              label="User Name"
              length={20}
              value={reviewObj.userName}
              onInputChanged={onInputChanged}
            />
            <FormInput
              id="company"
              type="text"
              placeholder="company name"
              autoFocus={false}
              label="Company"
              length={20}
              value={reviewObj.company}
              onInputChanged={onInputChanged}
            />
            <FormInput
              id="model"
              type="text"
              placeholder="model name"
              autoFocus={false}
              label="Model"
              length={40}
              value={reviewObj.model}
              onInputChanged={onInputChanged}
            />
            <FormInput
              id="battery"
              type="text"
              placeholder="3000"
              autoFocus={false}
              label="Battery (in mAh)"
              min={0}
              max={8000}
              value={reviewObj.battery}
              onInputChanged={onInputChanged}
            />
            <FormInput
              id="ram"
              type="number"
              placeholder="4"
              autoFocus={false}
              label="Ram (in GB)"
              min={0}
              max={24}
              value={reviewObj.ram}
              onInputChanged={onInputChanged}
            />
            <FormInput
              id="rom"
              type="number"
              placeholder="128"
              autoFocus={false}
              label="Rom (in GB)"
              min={0}
              max={1024}
              value={reviewObj.rom}
              onInputChanged={onInputChanged}
            />
          </div>
          <div>
            <FormInput
              id="price"
              type="number"
              placeholder="48000"
              autoFocus={true}
              label="Price (in Rs.)"
              min={0}
              max={500000}
              value={reviewObj.price}
              onInputChanged={onInputChanged}
            />
            <FormInput
              id="cameraRating"
              type="number"
              placeholder="4.2"
              autoFocus={true}
              label="Camera Rating (out of 5)"
              min={0}
              step={0.1}
              max={5}
              value={reviewObj.cameraRating}
              onInputChanged={onInputChanged}
            />
            <FormInput
              id="rating"
              type="number"
              placeholder="4.5"
              autoFocus={true}
              label="Over All Rating  (out of 5)"
              min={0}
              step={0.1}
              max={5}
              value={reviewObj.rating}
              onInputChanged={onInputChanged}
            />
            <div className="flex flex-col w-64 my-1">
              <label
                className="text-base text-slate-500 dark:text-slate-300 font-medium mb-1"
                htmlFor="review"
              >
                Review:
              </label>
              <textarea
                id="review"
                name="review"
                rows={5}
                maxLength={110}
                placeholder="Charging is very fast."
                className="border rounded border-gray-500 px-1 text-gray-800 bg-gray-200 outline-none"
                value={reviewObj.review}
                onChange={(event) => {
                  onInputChanged("review", event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <button className="mt-5 font-semibold border rounded-md px-2 py-1 text-white bg-blue-800 active:bg-blue-600">
          Add Review
        </button>
        {successMsg.msg && (
          <p
            className={`text-center mt-2 ${
              successMsg.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {successMsg.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddReview;
