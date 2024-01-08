import { useState } from "react";

const TaskStatus = (props)=>{
    const [isTaskCompleted,setTaskStatus] = useState(false);

    const taskStatusChangeHandler = (event)=>{
        if(event.target.value === "done")
        {
            setTaskStatus(true);
            props.onTaskMarkedDone(event.target.id);
        }
        else
        {
            setTaskStatus(false)
        }
    }
    return (
        <div>
            <select id={props.id} value={isTaskCompleted} onChange={taskStatusChangeHandler}>
                <option value="notdone">Not Done</option>
                <option value="done">Done</option>
            </select>
        </div>
    );
}
export default TaskStatus;