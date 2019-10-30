import mongoose from "mongoose";

export default mongo_uri => {
  mongoose.connect(mongo_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });
};
