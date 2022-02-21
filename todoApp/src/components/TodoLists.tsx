//Stateless component
import React from "react";
import DisplayTodo from "./DisplayTodo";

interface TodoListsInterface {
  id: number;
  title: string;
}

const TodoLists = () => {
  const todoLists: TodoListsInterface[] = [
    {
      id: 1,
      title: "Buy new sweatshirt",
    },
    {
      id: 2,
      title: "Begin promotional phase",
    },
    {
      id: 3,
      title: "Read an article",
    },
    {
      id: 4,
      title: "try not to fall asleep",
    },
    {
      id: 5,
      title: "Watch Sherlock",
    },
    {
      id: 6,
      title: "Begin QA for the product",
    },
    {
      id: 7,
      title: "Go for a walk",
    },
  ];
  return (
    <>
      {todoLists.map((list) => (
        <DisplayTodo key={list.id} title={list.title} />
      ))}
    </>
  );
};

export default TodoLists;
