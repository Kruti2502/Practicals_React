import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi"; //React icons
import styles from "./DisplayTodo.module.css";
import { TodoListInterface } from "../App";

interface DisplayTodoPropInterface {
  id: string;
  title: string;
  isCompleted: boolean;
}

const DisplayTodo = ({ id, title, isCompleted }: DisplayTodoPropInterface) => {
  const [todoCompleted, setTodoCompleted] = useState(isCompleted);

  const getHandler = (id: string) => {
    return () => {
      const todoArray: TodoListInterface[] = JSON.parse(
        localStorage.getItem("todo") || "[]"
      );
      todoArray.map((todo: TodoListInterface) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      localStorage.setItem("todo", JSON.stringify(todoArray));
      setTodoCompleted((prev) => !prev);
    };
  };

  const classChange = todoCompleted ? styles.complete_task : styles.todo_task;

  return (
    <div className={styles.todo_lists}>
      <div className={styles.flex_container}>
        <div onClick={getHandler(id)} className={classChange}>
          {title}
        </div>
        <FiCheckCircle
          onClick={getHandler(id)}
          className={`${classChange} ${styles.check_box}`}
        />
      </div>
    </div>
  );
};

export default DisplayTodo;
