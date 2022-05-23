const mongoose = require("mongoose");
const Groceries = require("../models/groceryModel");

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  groceries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grocery",
    },
  ],
});

CategorySchema.virtual("url").get(() => {
  return "categories" + this._id;
});

module.exports = mongoose.model("Category", CategorySchema);
