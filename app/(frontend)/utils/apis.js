import axios from "axios";

const url = "http://localhost:3000";

const getAllReviews = async () => {
  const response = await axios
    .get(`${url}/api/review`)
    .then(({ data, status }) => {
      return { ...data, status };
    })
    .catch((err) => {
      const { result, success } = err.response.data;
      const { status } = err.response;
      const serverResponse = { result, success, status };
      return serverResponse;
    });
  return response;
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
      return serverResponse;
    });
  return response;
};

const getSingleReview = async (id) => {
  const response = await axios
    .get(`${url}/api/review/${id}`)
    .then(({ data, status }) => {
      return { ...data, status };
    })
    .catch((err) => {
      const { result, success } = err.response.data;
      const { status } = err.response;
      const serverResponse = { result, success, status };
      return serverResponse;
    });
  return response;
};

const updateReview = async (reviewObj, id) => {
  const phoneReview = JSON.stringify(reviewObj);

  const response = await axios
    .put(`${url}/api/review/${id}`, phoneReview)
    .then(({ data, status }) => {
      const serverResponse = { ...data, status };
      return serverResponse;
    })
    .catch((err) => {
      const { result, success } = err.response.data;
      const { status } = err.response;
      const serverResponse = { result, success, status };
      return serverResponse;
    });
  return response;
};

const deleteReview = async (id) => {
  const response = await axios
    .delete(`${url}/api/review/${id}`)
    .then(({ data, status }) => {
      console.log(data, `status ${status}`);
      return { ...data, status };
    })
    .catch((err) => {
      const { result, success } = err.response.data;
      const { status } = err.response;
      const serverResponse = { result, success, status };
      return serverResponse;
    });
  return response;
};

export {
  getAllReviews,
  addReview,
  getSingleReview,
  updateReview,
  deleteReview,
};
