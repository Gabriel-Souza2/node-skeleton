import { Schema, model } from "mongoose";

const Product = new Schema({
  title: {
    type: String,
    require: true
  },

  description: {
    type: String,
    require: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model("product", Product);
