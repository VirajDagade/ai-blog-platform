// Import mongoose
import mongoose from "mongoose";

// Define Comment Schema
const commentSchema = new mongoose.Schema(
  {
    // Reference to blog
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog", // name of the referenced model
      required: true,
    },

    // Name of commenter
    name: {
      type: String,
      required: true,
    },

    // Content of the comment
    content: {
      type: String,
      required: true,
    },

    // Approval status of the comment
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create Comment model from schema
const Comment = mongoose.model("Comment", commentSchema);

// Export Comment model
export default Comment;
