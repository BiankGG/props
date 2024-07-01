import "./App.css";
import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Hacer la compra", completed: false },
    { id: 2, text: "Llamar al médico", completed: true },
    { id: 3, text: "Hacer ejercicio", completed: false },
  ]);

  // le pasaremos la función de añadir para usarla
  function addTask(text) {
    const CrearTask = {
      id: tasks.length + 1, //+1 siguiente número como id
      text: text,
      completed: false,
    };
    setTasks([...tasks, CrearTask]);
  }

  //funciones de borrado
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  //y completado
  function done(taskId) {
    const realizadoTask = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(realizadoTask);
  }

  return (
    <div>
      <h1 className="titulo">Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul className="Cards">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            done={done}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
