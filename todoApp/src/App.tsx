import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import AddTodoButton from "./components/AddTodoButton";
import DateContainer from "./components/DateContainer";
import DisplayTodo from "./components/DisplayTodo";
import moment from "moment";

export interface TodoListInterface {
  id: string;
  title: string;
  date: string;
  isCompleted: boolean;
}

const App = () => {
  let [todoTasks, setTodoTasks] = useState<TodoListInterface[]>(
    JSON.parse(localStorage.getItem("todo") || "[]")
  );

  const buttonHandler = () => {
    const todoArray: TodoListInterface[] = JSON.parse(
      localStorage.getItem("todo") || "[]"
    );
    setTodoTasks(todoArray);
  };

  useEffect(() => {
    const curDate = `${moment().format("D")}/${moment().format(
      "M"
    )}/${moment().format("YYYY")}`;
    setTodoTasks((prev) =>
      prev.filter((todo) => {
        return curDate === todo.date;
      })
    );
  }, []);

  const checkTodoHandler = (id: string) => {
    const todoArray = todoTasks.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodoTasks(todoArray);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoTasks));
  }, [todoTasks]);

  return (
    <div className={styles.container}>
      <DateContainer />
      <div className={styles.todo_container}>
        {todoTasks.map((todo) => (
          <DisplayTodo
            key={todo.id}
            {...todo}
            onCheckTodoHandler={checkTodoHandler}
          />
        ))}
      </div>
      <AddTodoButton onButtonClicked={buttonHandler} />
    </div>
  );
};

export default App;
