const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  periodo: {
    type: String,
    required: true,
  },
  prerequisito: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Materia", Schema);
