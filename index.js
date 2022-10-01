import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import restaurantRoute from "./routes/restaurants.js";
import tagRoute from "./routes/tags.js";
import cityRoute from "./routes/cities.js";
import { getcomments, insertComment } from "./controllers/comments_operation.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;

const connect = async () => {
  try {
    const mongodbConnection = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/?retryWrites=true&w=majority`;
    await mongoose.connect(mongodbConnection);
    console.log("Connected to mongoDb.");
  } catch (error) {
    throw error;
  }
};
const db = mongoose.connection;
db.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
db.on("connected", () => {
  console.log("mongoDB connected!");
});
app.use("/restaurants", restaurantRoute);
app.use("/tags", tagRoute);
app.use("/cities", cityRoute);

/* app.get("/tags", (req, res) => {
  res.send({ status: "Read tags succesfully" }).status(200);
});
// 
app.get("/tags/:id", (req, res) => {
  res.send({ status: "Read single tag succesfully" }).status(200);
});
app.post("/tags", (req, res) => {
  res.send({ status: "Tags data created" }).status(201);
});
*/

app.post("/comment", async (req, res) => {
  const newComment = await insertComment({
    author: req.body.author,
    text: req.body.text,
    createdAt: req.body.createdAt,
    timestamps: req.body.timestamps,
    restaurant_id: req.body.restaurant_id,
  });
  res.send(newComment).status(201);
});
app.get("/comment",getcomments)
function _addComment(dbComment) {
  return {
    author: dbComment.author,
    text: dbComment.text,
    createdAt: dbComment.createdAt,
    timestamps: dbComment.timestamps,
    restaurant_id: dbComment.restaurant_id,
  };
}
app.listen(port, () => {
  connect();
  console.log("Server started at port " + port);
});
