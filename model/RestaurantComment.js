import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    author: String,
    text: String,
    restaurant_id: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("RestaurantComment", commentSchema);
