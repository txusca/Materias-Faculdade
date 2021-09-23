const router = require("express").Router();

router.get("/", (_req, res) => {
  res.json({ message: "Funcionou!" });
});

module.exports = router;
