"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllReviews } from "../utils/apis";
import PhoneCard from "./PhoneCard";
import Loading from "@/loading";
import NotFound from "@/not-found";
import phoneList from "./phoneList";

const Reviews = () => {
  const [phoneReviews, setPhoneReviews] = useState({
    result: [],
    success: true,
    isLoading: true,
  });
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    data();
  }, [isDeleted]);

  const data = async () => {
    const response = await getAllReviews();
    const { result, success } = response;
    setPhoneReviews({ result: [...result], success, isLoading: false });
    isDeleted && setIsDeleted(false);
  };

  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center p-5">
      <h3 className=" text-xl font-bold my-5 text-center">
        Discover Your Perfect Phone here
      </h3>
      <Link
        href="/add-review"
        className="group h-fit px-5 py-3 mb-5 transition-colors rounded-lg border border-gray-400 bg-gray-200 dark:border-neutral-700 dark:bg-neutral-700/30 shadow-md shadow-gray-500 hover:shadow-blue-600 active:shadow-inner active:shadow-blue-600 lg:text-left"
      >
        <h3 className="mb-1 font-semibold">
          Add Review
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h3>
        <p className="m-0 max-w-[50ch] text-sm opacity-50">
          Craft a review that highlights your mobile phone.
        </p>
      </Link>
      {!phoneReviews.isLoading ? (
        phoneReviews.success ? (
          phoneReviews.result.length ? (
            <ul className="px-3 grid max-[655px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {phoneReviews.result.map((eachPhone) => (
                <PhoneCard
                  key={eachPhone._id}
                  phoneDetails={eachPhone}
                  setIsDeleted={setIsDeleted}
                />
              ))}
            </ul>
          ) : (
            <h2 className="mt-4 font-bold text-xl">No Reviews Found</h2>
          )
        ) : (
          <NotFound />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Reviews;
