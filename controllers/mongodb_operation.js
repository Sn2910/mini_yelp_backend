const mongodbConnection = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/?retryWrites=true&w=majority`;
mongoose.connect(mongodbConnection);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection failed"));

function _addComment(dbComment) {
  return {
    author: dbComment.author,
    text: dbComment.text,
    createdAt: dbComment.createdAt,
    timestamps: dbComment.timestamps,
    restaurant_id: dbComment.restaurant_id,
  };
}

async function insertComment(update) {
  const newComment = await Comment.create({
    author: update.author,
    text: update.text,
    createdAt: update.createdAt,
    timestamps: update.timestamps,
    restaurant_id: update.restaurant_id,
  });
  return newComment;
}

module.exports = {
  insertComment,
};
