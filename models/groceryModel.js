const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  numberInStock: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

GrocerySchema.virtual("url").get(() => {
  return "groceries" + this._id;
});

module.exports = mongoose.model("Grocery", GrocerySchema);
