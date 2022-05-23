const { validationResult } = require("express-validator");
const res = require("express/lib/response");
const CategoryService = require("../services/categoryService");

const service = new CategoryService();

class CategoryController {
  async getCategoryForm(req, res) {
    res.render("categoryForm", { title: "Create a category" });
  }

  async getCategoryUpdateForm(req, res) {
    res.render("categoryUpdateForm", {
      title: "Update a category",
      url: `/categories/category/${req.params.categoryName}`,
    });
  }

  async getCategoryDeleteForm(req, res) {
    res.render("categoryDeleteForm", {
      title: "Delete a category",
      url: `/categories/delete/category/${req.params.categoryName}`,
      name: req.params.categoryName,
    });
  }

  async createCategory(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const result = await service.createCategory(req.body);
      res.redirect(`categories/category/${result.name}`);
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async readCategory(req, res) {
    try {
      const category = await service.readCategory(req.params.categoryName);
      res.render("category", { title: "Category", category });
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async readAllCategories(req, res) {
    try {
      const categories = await service
        .readAllCategories()
        .populate("groceries");
      res.render("categories", { title: "Categories", categories });
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async updateCategory(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const category = await service.updateCategory(
        req.params.categoryName,
        req.body
      );
      res.redirect(`/categories/category/${category.name}`);
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async deleteCategory(req, res) {
    try {
      await service.deleteCategory(req.params.categoryName);
      res.redirect("/categories");
    } catch (err) {
      res.render("error", { error: err });
    }
  }

  async deleteAllCategories(req, res) {
    try {
      await service.deleteAllCategories();
      res.redirect("/categories");
    } catch (err) {
      res.render("error", { error: err });
    }
  }
}

module.exports = CategoryController;
