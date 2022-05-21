const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  groceries: [
    {
      type: Schema.Types.ObjectId,
      ref: "Grocery",
    },
  ],
});

CategorySchema.virtual("url").get(() => {
  return "categories" + this._id;
});

module.exports = mongoose.model("Category", CategorySchema);
