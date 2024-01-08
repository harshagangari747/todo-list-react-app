import { useState } from "react";
const AddTask = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const addNewTaskHandler = (event) => {
    event.preventDefault();
    const newTask = {
      taskId: Math.random(),
      title: newTitle,
      isDone: false,
      timeToStartAt: newTime.toString(),
      dateToStartAt:new Date(newDate)
    };
    props.onAddTask(newTask);
    setNewTitle("");
    setNewDate("");
    setNewTime("");
  };

  const newTaskTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const newTaskDateHandler = (event) => {
    setNewDate(event.target.value);
  };

  const newTaskTimeHandler = (event) => {
    setNewTime(event.target.value);
  };

  return (
    <form onSubmit={addNewTaskHandler}>
      <div>
        <label>Title</label>
        <input type="text" onChange={newTaskTitleHandler} value={newTitle}></input>
      </div>
      <div>
        <label>Start At</label>
        <input type="date" onChange={newTaskDateHandler} value={newDate} />
      </div>
      <div>
        <label>Time</label>
        <input type="time" onChange={newTaskTimeHandler} value={newTime}/>
      </div>
      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};
export default AddTask;
