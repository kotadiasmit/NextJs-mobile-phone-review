import axios from "axios";

const url = "http://localhost:3000";

const getAllReviews = () => {
  axios.get(`${url}/reviews`).then(({ data }) => {
    console.log(data);
  });
};

const addReview = async (reviewObj, setSuccessMsg) => {
  const phoneReview = JSON.stringify(reviewObj);

  const response = await axios
    .post(`${url}/api/review`, phoneReview)
    .then(({ data, status }) => {
      const serverResponse = { ...data, status };
      return serverResponse;
    })
    .catch((err) => {
      const { result, success } = err.response.data;
      const { status } = err.response;
      const serverResponse = { result, success, status };
      console.log(err);
      return serverResponse;
    });
  return response;
};

export { getAllReviews, addReview };
