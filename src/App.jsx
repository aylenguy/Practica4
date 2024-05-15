import { useState } from "react";
import NuevaTarea from "./component/nuevaTarea/NuevaTarea";
import Tarea from "./component/tarea/Tarea";

function App() {
  const TAREAS = [{ id: 1, tarea: "practica 4", completa: false }];

  const [tareas, setTareas] = useState(TAREAS);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { tarea: nuevaTarea }]);
  };
  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <>
      <NuevaTarea onAddTarea={agregarTarea} />
      <Tarea tareas={tareas} onDeleteTarea={eliminarTarea} />
    </>
  );
}

export default App;
