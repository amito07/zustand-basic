/*eslint-disable*/

import { useStore } from "../../store";
import Task from "../Task/Task";
import "./Column.css";
const Column = ({ state }) => {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  console.log("tasks",tasks)

  return (
    <div className="column">
      <p>{state}</p>
      {tasks.map((task) => {
        <Task title={task.title} key={task.title} />;
      })}
    </div>
  );
};

export default Column;
