import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { deleteReview } from "../utils/apis";

const PhoneCard = ({ phoneDetails, setIsDeleted }) => {
  const router = useRouter();
  const {
    _id,
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
  const UpdateReview = () => {
    router.push(`/update-review/${_id}`);
  };
  const DeleteReview = async () => {
    const response = await deleteReview(_id);
    toast(response.result, {
      autoClose: 2000,
    });
    setIsDeleted(true);
  };
  return (
    <li className="relative h-[350px] w-[289px] rounded-md border border-gray-500 p-2">
      <h2 className="text-center text-lg font-bold">{company}</h2>
      <h4 className="text-center font-semibold mb-1">{model}</h4>
      <div className="flex">
        <p className="font-medium w-32">Battery :</p>
        <p>{`${battery} mAh`}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Ram :</p>
        <p>{`${ram} GB`}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Rom :</p>
        <p>{`${rom} GB`}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Price :</p>
        <p>{`${price} Rs.`}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">CameraRating :</p>
        <p>{`${cameraRating}/5`}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Rating :</p>
        <p>{`${rating}/5`}</p>
      </div>
      <div className="flex">
        <p className="font-medium w-32">Review :</p>
        <p className="h-16 w-[calc(100%-8rem)] overflow-auto">{review}</p>
      </div>
      <p className="absolute bottom-0 right-0 font-medium text-gray-500 p-2">{`~ By ${userName}`}</p>
      <div className="flex justify-around ">
        <button
          onClick={UpdateReview}
          className="mt-3 text-sm font-semibold border rounded-md px-1 py-1 text-white bg-blue-800 active:bg-blue-600"
        >
          Update Review
        </button>
        <button
          onClick={DeleteReview}
          className="mt-3 text-sm font-semibold border rounded-md px-1 py-1 text-white bg-blue-800 active:bg-blue-600"
        >
          Delete Review
        </button>
        <ToastContainer />
      </div>
    </li>
  );
};

export default PhoneCard;
