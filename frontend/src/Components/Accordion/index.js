import React from "react";
import { Accordion, Card } from "react-bootstrap";

const Component = (props) => {
  return (
    <Accordion>
      {props.listMaterias.map((materia, key) => (
        <Card key={key}>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {materia.nome}
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>{materia.descricao}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default Component;
