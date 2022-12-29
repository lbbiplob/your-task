import { useQuery } from "@tanstack/react-query";
import React from "react";
import Task from "../Task/Task";

const MyTask = () => {
  const { data: tasks = [] } = useQuery({
    queryKey: ["task"],
    queryFn: () =>
      fetch("http://localhost:5000/task").then((res) => res.json()),
  });
  return (
    <div>
      this is my task
      <div>
        {tasks.map((task) => (
          <Task key={task._id} task={task}></Task>
        ))}
      </div>
    </div>
  );
};

export default MyTask;
