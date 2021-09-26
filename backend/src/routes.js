const router = require("express").Router();
const Materia = require("./models/Materia");

router.get("/", (_req, res) => {
  res.json({ message: "Funcionou!" });
});

// Get matérias
router.get("/materias", async (_req, res) => {
  try {
    const materias = await Materia.find().lean();
    res.json({ materias: materias });
  } catch (error) {
    console.log(error);
    res.json({ error: "Ocorreu um erro ao retornar as matérias" });
  }
});

router.post("/materias", async (req, res) => {
  try {
    const materia = await Materia.create(req.body);
    return res.json({ materia });
  } catch (error) {
    res.json({ error: `Ocorreu um erro ao salvar a matéria: ${error}` });
  }
});

module.exports = router;
