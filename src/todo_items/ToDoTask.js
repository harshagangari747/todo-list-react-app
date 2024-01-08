import TaskDate from "./TaskDate";
import TaskStatus from "./TaskStatus";
import EmptyTasks from "./EmptyTasks";

const Todotask = (props) => {
  const removeEntryHandler = (remtaskId) => {
    props.onTaskStatusChangedExcludeEntry(remtaskId);
  };

  if (props.tasks.length == 0) {
    return (<EmptyTasks />);
  } else {
    return props.tasks.map((task) => (
      <tr>
        <td>{task.title}</td>
        <TaskDate date={task.dateToStartAt} />
        <td>{task.timeToStartAt}</td>
        <td>
          <TaskStatus onTaskMarkedDone={removeEntryHandler} id={task.taskId} />
        </td>
      </tr>
    ));
  }
};

export default Todotask;
