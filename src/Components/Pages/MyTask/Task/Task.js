import { Button, Table } from "flowbite-react";
import React from "react";

const Task = ({ task, handelTaskDelete }) => {
  const { name, userName, email, _id } = task;

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {name}
      </Table.Cell>
      <Table.Cell>{userName}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>
        <Button size="xs" color="failure">
          Complete
        </Button>
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
      <Table.Cell>
        <Button onClick={() => handelTaskDelete(_id)} size="xs" color="failure">
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Task;
