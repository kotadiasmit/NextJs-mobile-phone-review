"use client";
import ReviewForm from "@/(frontend)/Form/reviewForm";
import { getSingleReview } from "@/(frontend)/utils/apis";
import React, { useEffect, useState } from "react";
import NotFound from "../../../not-found";
import Loading from "@/loading";

const UpdateReview = ({ params }) => {
  const { id } = params;
  const [phoneReview, setPhoneReview] = useState({
    result: {},
    success: true,
    isLoading: true,
  });
  useEffect(() => {
    const data = async () => {
      const response = await getSingleReview(id);
      const { result, success } = response;
      success && setPhoneReview({ result, success, isLoading: false });
    };
    data();
  }, []);
  console.log(phoneReview.result.length);
  return (
    <div>
      {!phoneReview.isLoading ? (
        phoneReview.success ? (
          <ReviewForm initialState={phoneReview.result} />
        ) : (
          <NotFound />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UpdateReview;
