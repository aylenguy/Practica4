import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import propTypes from "prop-types";

function Tarea({ tareas, onDeleteTarea }) {
  const [tareaRealizada, setTareaRealizada] = useState([]);

  const handlerSelect = (i) => {
    if (tareaRealizada.includes(i)) {
      setTareaRealizada(tareaRealizada.filter((index) => index !== i));
    } else {
      setTareaRealizada([...tareaRealizada, i]);
    }
  };

  const handleEliminarTarea = (i) => {
    onDeleteTarea(i);
  };

  return (
    <>
      <h2>Lista de Tareas:</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            onClick={() => handlerSelect(index)}
            style={{
              cursor: "pointer",
              color: tareaRealizada.includes(index) ? "grey" : "black",
            }}
          >
            {tarea && tarea.tarea}
            <CloseButton onClick={(event) => handleEliminarTarea(event, index)}>
              Eliminar
            </CloseButton>
          </li>
        ))}
      </ul>
    </>
  );
}

Tarea.propTypes = {
  tareas: propTypes.array,
  onDeleteTarea: propTypes.func.isRequired,
};

export default Tarea;
