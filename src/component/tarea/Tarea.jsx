import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import NuevaTarea from "../nuevaTarea/NuevaTarea";

const TAREAS = [];

function Tarea() {
  const [tareas, setTareas] = useState(TAREAS);
  const [tareaRealizada, setTareaRealizada] = useState([]);

  const onAddTarea = (nuevaTarea) => {
    setTareas([...tareas, { tarea: nuevaTarea }]);
  };

  const handlerSelect = (i) => {
    if (tareaRealizada.includes(i)) {
      setTareaRealizada(tareaRealizada.filter((index) => index !== i));
    } else {
      setTareaRealizada([...tareaRealizada, i]);
    }
  };

  const handlerEliminarTarea = (i) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(i, 1); //eliminar la tarea en el índice proporcionado
    setTareas(nuevasTareas);
  };

  return (
    <>
      <NuevaTarea onAddTarea={onAddTarea} />
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
            <CloseButton onClick={() => handlerEliminarTarea(index)}>
              Eliminar
            </CloseButton>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tarea;
