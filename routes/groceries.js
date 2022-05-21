var express = require("express");
const GroceryController = require("../controllers/groceryController");
var router = express.Router();

const controller = new GroceryController();

/* GET users listing. */
router.get("/", (req, res) => controller.readGrocery(req, res));
router.post("/", (req, res) => controller.createGrocery(req, res));
router.put("/", (req, res) => controller.updateGrocery(req, res));
router.delete("/", (req, res) => controller.deleteGrocery(req, res));

module.exports = router;
