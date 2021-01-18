import React, { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name){
    const newTask = {id: "todo-"+nanoid(), name: name, completed:false};
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id){
    const remainingTask = tasks.filter(tasks => id !== tasks.id);
    setTasks(remainingTask);
  }
  const tasksList = tasks.map(task =>
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} deleteTask={deleteTask}/>
  );
  const tasksNoun = tasksList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasksList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <FilterButton />
      <FilterButton />
      <FilterButton />
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
      {tasksList}
      </ul>
    </div>
  );
}

export default App;
