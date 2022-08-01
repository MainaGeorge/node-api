const { Category } = require('../models/category.schema');
const categoryRouter = require("express").Router();

categoryRouter.get("/", async (req, res) => {
    const categories = await Category.find();

    return res.status(200).json(categories);
})

categoryRouter.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });

  category = await category.save();

  if (category) return res.status(201).json(category);

  return res.status(500).json({
    error: "something went wrong while saving the product",
  });
});


module.exports = categoryRouter;