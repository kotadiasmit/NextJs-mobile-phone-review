import React from "react";
import phoneList from "./phoneList";
import Link from "next/link";
import PhoneCard from "./PhoneCard";

const Reviews = () => {
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
      <ul className="px-3 grid max-[655px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {phoneList.map((eachPhone) => (
          <PhoneCard key={eachPhone.id} phoneDetails={eachPhone} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
