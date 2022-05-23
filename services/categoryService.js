const Category = require("../models/categoryModel");

class CategoryService {
  createCategory(body) {
    const category = new Category({
      name: body.name,
      description: body.description,
      groceries: body.groceries || [],
    });
    return category.save();
  }

  readCategory(name) {
    return Category.findOne({ name });
  }

  readAllCategories(req, res) {
    return Category.find({});
  }

  updateCategory(name, body) {
    const category = {
      description: body.description,
    };
    return Category.updateOne({ name }, category);
  }

  deleteCategory(name) {
    return Category.deleteOne({ name });
  }

  deleteAllCategories() {
    return Category.deleteMany({});
  }
}

module.exports = CategoryService;
