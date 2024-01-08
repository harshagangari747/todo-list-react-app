import TodoTask from './todo_items/ToDoTask'
import './App.css';
import AddTask from './todo_items/AddTask';
import { useState } from 'react';

const taskList= [{
  taskId:"1",
  title:"Cleanup room",
  dateToStartAt:new Date(2024,1,6),
  timeToStartAt: '12:40',
  isTaskDone:false
},
{
  taskId:"2",
  title:"Groceries",
  dateToStartAt: new Date(2024, 2, 16),
  timeToStartAt:'5:20',
  isTaskDone:false
}]

function App() {
  const [updatedTaskList,setTaskList] = useState(taskList)
  const addTaskHandler = (task)=>{
    setTaskList((updatedTaskList)=>{
      return [task,...updatedTaskList]
    })
  }
  
  const removeTaskHandler=(tid)=>{
    setTaskList((updatedTaskList) => {
      return [...(updatedTaskList.filter((x)=>{return x.taskId != tid}))]
    })
  }
  return (
    <div className="App">
      <AddTask onAddTask={addTaskHandler}/>
      <h3>To Do List</h3>
      <TodoTask tasks={updatedTaskList} onTaskStatusChangedExcludeEntry={removeTaskHandler}/>
    </div>
  );
}

export default App;
