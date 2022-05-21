var express = require("express");
const CategoryController = require("../controllers/categoryController");
var router = express.Router();

const controller = new CategoryController();

/* GET users listing. */
router.get("/", (req, res) => controller.readCategory(req, res));
router.post("/", (req, res) => controller.createCategory(req, res));
router.put("/", (req, res) => controller.updateCategory(req, res));
router.delete("/", (req, res) => controller.deleteCategory(req, res));

module.exports = router;
