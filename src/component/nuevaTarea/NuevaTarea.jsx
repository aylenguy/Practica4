import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import propTypes from "prop-types";

function NuevaTarea({ onAddTarea }) {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handlerNuevaTarea = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (nuevaTarea.trim() !== "") {
      onAddTarea(nuevaTarea);
      setNuevaTarea("");
    }
  };

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nuevaTarea">Tarea</Form.Label>
          <Form.Control
            id="nuevaTarea"
            value={nuevaTarea}
            onChange={handlerNuevaTarea}
            placeholder="Ingrese la nueva tarea"
          />
        </Form.Group>

        <Button type="submit">Agregar</Button>
      </Form>
    </>
  );
}

NuevaTarea.propTypes = {
  onAddTarea: propTypes.func,
};
export default NuevaTarea;
