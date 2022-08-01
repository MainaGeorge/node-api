const { Category } = require("../models/category.schema");
const categoryRouter = require("express").Router();

categoryRouter.get("/", async (req, res) => {
  const categories = await Category.find();

  return res.status(200).json(categories);
});

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

categoryRouter.delete("/:id", (req, res) => {
  const categoryId = req.params.id;
  const category = Category.findByIdAndRemove(categoryId)
    .then((cat) => {
      if (cat)
        return res
          .status(204)
          .json({ success: true, message: `sucessfully deleted the category with id ${categoryId}` });
      return res.status(404).json({ success: false, message: `unable to find the category with id ${categoryId}` });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
});
module.exports = categoryRouter;
