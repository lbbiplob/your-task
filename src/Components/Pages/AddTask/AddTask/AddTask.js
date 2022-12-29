import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const handelAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const task = form.task.value;
    console.log(task);
    const data = {
      name: task,
      userName: user.displayName,
      email: user.email,
    };
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
        }
      });
  };
  return (
    <div>
      <form onSubmit={handelAddTask}>
        <div className="flex flex-col gap-4 lg:w-1/3 p-5 mx-auto">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Write Your Task" />
            </div>
            <TextInput id="large" name="task" type="text" sizing="lg" />
          </div>
          <Button type="submit">Add Task</Button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
