import Comment from "../model/Comments.js";

function _addComment(dbComment) {
  return {
    author: dbComment.author,
    text: dbComment.text,
    createdAt: dbComment.createdAt,
    timestamps: dbComment.timestamps,
    restaurant_id: dbComment.restaurant_id,
  };
}

export async function insertComment(update) {
  const newComment = await Comment.create({
    author: update.author,
    text: update.text,
    createdAt: update.createdAt,
    timestamps: update.timestamps,
    restaurant_id: update.restaurant_id,
  });
  return newComment;
}
