/* Function App 7 */



import React, { useState } from 'react';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);

    function handleAddClick() {
        const input = document.querySelector(".taskInput");
        const newTask = input.value.trim();
        if (!newTask) return;
        setTasks(prevTask => [...prevTask, newTask]);
        input.value = "";
    }

    function handleDeleteClick(index) {
        setTasks(prevTask => prevTask.filter((_, i) => i !== index));
    }

    function moveTaskup(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="todo-container">
            <div className="todo-input-group">
                <input
                    type="text"
                    className="taskInput"
                    placeholder="What needs to be done?"
                />
                <button className="add-btn" onClick={handleAddClick}>Add</button>
            </div>

            <div className="todo-list">
                {tasks.map((task, index) => (
                    <div key={index} className="todo-item">
                        <span className="todo-text">{task}</span>
                        <div className="todo-actions">
                            <button className="move-btn" onClick={() => moveTaskup(index)}>👆</button>
                            <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
                            <button className="delete-btn" onClick={() => handleDeleteClick(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* To do list app using "id"

function handleAddClick() {
  const input = document.querySelector(".taskInput")
  const newTask = input.value.trim()

  if (!newTask) return
  const taskObj = { id: Date.now(), text: newTask }

  setTasks(prev => [...prev, taskObj])
  input.value = ""
}


    return (<></>)
}

*/