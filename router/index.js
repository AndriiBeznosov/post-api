const express = require("express");

const router = express.Router();

router.get("/api/humans", (req, res, next) => {
  res.json({
    posts: [
      { name: "Andrii", a: 22 },
      { name: "Den", a: 24 },
    ],
  });
});

router
  .route("/humans")
  .get((req, res, next) => {
    return next({ massage: "Error" });
    res.json({
      posts: [
        { name: "Andrii", a: 22 },
        { name: "Den", a: 24 },
      ],
    });
  })
  .post((req, res, next) => {
    const { name } = req.body;
    console.log(name);
    res.status(201).json({
      post: "heloo",
    });
  });

router.route("/humans/:humanId/:id").delete((req, res, next) => {
  // res.status(200).json({ abs: "abs" });
  const { humanId, id } = req.params;
  console.log(humanId, id);
  res.end();
});

module.exports = {
  router,
};
