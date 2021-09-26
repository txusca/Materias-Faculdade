import React, { useState, useEffect } from "react";
import { Form, Button, Card, Accordion } from "react-bootstrap";

import useApi from "./helpers/Api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const api = useApi();
  const [listMaterias, setListMaterias] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [dependencia, setDependencia] = useState("");

  useEffect(() => {
    const getMateriasApi = async () => {
      const lmaterias = await api.getMaterias();
      setListMaterias(lmaterias);
    };
    getMateriasApi();
  }, []);

  const handleSubmit = async (event) => {
    const json = await api.createMateria(nome, descricao, periodo);
  };

  return (
    <div>
      <Accordion>
        {listMaterias.map((materia, key) => (
          <Card key={key}>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {materia.nome}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {materia.descricao} | <span>{materia.periodo}</span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>

      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formMateriaNome">
          <Form.Label>Nome da matéria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome aqui"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMateriaDescricao">
          <Form.Label>Descrição da matéria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite descrição aqui"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMateriaPeriodo">
          <Form.Label>Periodo da matéria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o periodo aqui"
            value={periodo}
            onChange={(event) => setPeriodo(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Cadastrar matéria
        </Button>
      </Form>
    </div>
  );
};

export default App;
