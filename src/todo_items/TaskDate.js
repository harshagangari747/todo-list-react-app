const TaskDate = (dateprop) => {
  const month = dateprop.date.toLocaleString("en-US", { month: "long" });
  const day = dateprop.date.toLocaleString("en-US", { day: "2-digit" });
  const year = dateprop.date.getFullYear();

  return (
        <h3>{day}-{month}-{year}</h3>

  );
};
export default TaskDate;
