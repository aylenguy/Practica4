import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import propTypes from "prop-types";

function NewTask({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      onAddTask({ id: Math.random(), task: newTask });
      setNewTask("");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="newTask">Tarea</Form.Label>
          <Form.Control
            id="newTask"
            value={newTask}
            onChange={handleNewTask}
            placeholder="Ingrese nueva tarea"
          />
        </Form.Group>

        <Button type="submit">Agregar</Button>
      </Form>
    </>
  );
}

NewTask.propTypes = {
  onAddTask: propTypes.func,
};

export default NewTask;
