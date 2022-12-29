import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import React from "react";
import Task from "../Task/Task";

const MyTask = () => {
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: () =>
      fetch("http://localhost:5000/task").then((res) => res.json()),
  });

  const handelTaskDelete = (id) => {
    const confirm = window.confirm(`Are you sure Delete This  task`);
    if (confirm) {
      fetch(`http://localhost:5000/task/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
          }
        });
    }
  };
  return (
    <div>
      this is my task
      <div className="p-5">
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>Task</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Update</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {tasks.map((task) => (
              <Task
                key={task._id}
                task={task}
                handelTaskDelete={handelTaskDelete}
              ></Task>
            ))}
          </Table.Body>
        </Table>
        ;
      </div>
    </div>
  );
};

export default MyTask;
