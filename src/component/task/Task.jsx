import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import NewTask from "../newTask/NewTask";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const onAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleSelect = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <NewTask onAddTask={onAddTask} />
      <h2>Lista de tareas:</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => handleSelect(task.id)}
            style={{
              cursor: "pointer",
              color: completedTasks.includes(task.id) ? "grey" : "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {task.task}
            <CloseButton onClick={() => handleDeleteTask(task.id)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Task;
