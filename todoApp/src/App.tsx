import React, { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import DateContainer from "./components/DateContainer";
import DisplayTodo from "./components/DisplayTodo";

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

  const curTime = new Date();
  todoTasks = todoTasks.filter((todo: TodoListInterface) => {
    let curDate = `${curTime.getDate()}/${
      curTime.getMonth() + 1
    }/${curTime.getFullYear()}`;
    return curDate === todo.date;
  });
  localStorage.setItem("todo", JSON.stringify(todoTasks));

  return (
    <div className={styles.container}>
      <DateContainer />
      <div className={styles.todo_container}>
        {todoTasks.map((todo: TodoListInterface) => (
          <DisplayTodo
            key={todo.id}
            title={todo.title}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        ))}
      </div>
      <Button onButtonClicked={buttonHandler} />
    </div>
  );
};

export default App;
