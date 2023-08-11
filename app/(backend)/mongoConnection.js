import mongoose from "mongoose";
const PORT = 3000;
const MongoConnection = () =>
  mongoose
    .connect("mongodb://localhost:27017/PhoneReviews", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected To MongoDB Database");
    })
    .catch((err) => console.log(err));

export default MongoConnection;
