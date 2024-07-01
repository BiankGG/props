import React from "react";

function Task({ id, text, completed, deleteTask, done }) {
  
    const handleDeleteTask = () => {
    deleteTask(id);
  };
  const handleDone = () => {
    done(id);
  };

  return (

        <li>
      <p
        onClick={handleDone}
        style={{ textDecoration: completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {text}
      </p>
      <button onClick={handleDeleteTask}>Erase</button>
    </li>
    
  );
}

export default Task;
