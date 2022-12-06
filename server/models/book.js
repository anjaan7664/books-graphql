import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  pages: Number,
  authorID: String,
});

export default mongoose.model("Book", bookSchema);
