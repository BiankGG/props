import React, { useState } from "react";

//destructuring entra directo a la propiedad/addtask function app.jsx
function AddTaskForm({ addTask }) {
  const [newTaskText, setNewTaskText] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskText !== "") {
      addTask(newTaskText);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"  onChange={(e)=>setNewTaskText(e.target.value)} value={newTaskText}/>
        <button type="submit"> add Task</button>
      </form>
    </>
  );
}

export default AddTaskForm;