var express = require("express");
const { body } = require("express-validator");
const CategoryController = require("../controllers/categoryController");
var router = express.Router();

const controller = new CategoryController();

router.get("/category/:categoryName", (req, res) =>
  controller.readCategory(req, res)
);
router.get("/", (req, res) => controller.readAllCategories(req, res));
router.post(
  "/",
  body("name").trim().isLength({ min: 1 }).escape(),
  body("description").trim().isLength({ min: 1 }).escape(),
  (req, res) => controller.createCategory(req, res)
);
router.post(
  "/category/:categoryName",
  body("description").trim().isLength({ min: 1 }).escape(),
  (req, res) => controller.updateCategory(req, res)
);
router.post("/delete/category/:categoryName", (req, res) =>
  controller.deleteCategory(req, res)
);
router.post("/delete", (req, res) => controller.deleteAllCategories(req, res));
router.get("/form", (req, res) => controller.getCategoryForm(req, res));
router.get("/updateform/:categoryName", (req, res) =>
  controller.getCategoryUpdateForm(req, res)
);
router.get("/deleteform/:categoryName", (req, res) => {
  controller.getCategoryDeleteForm(req, res);
});

module.exports = router;
