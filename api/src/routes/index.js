const { Router } = require("express");

const router = Router();

router.use("/", async (req, res, next) => {
  res.json({
    message: "Hello World from Nokler!",
  });
  next();
});

module.exports = router;
