import React from "react";
import { FiCheckCircle } from "react-icons/fi"; //React icons
import styles from "./DisplayTodo.module.css";

interface DisplayTodoPropInterface {
  id: string;
  title: string;
  isCompleted: boolean;
  onCheckTodoHandler: (arg: string) => void;
}

const DisplayTodo = ({
  id,
  title,
  isCompleted,
  onCheckTodoHandler,
}: DisplayTodoPropInterface) => {
  const classChange = isCompleted ? styles.complete_task : styles.todo_task;
  return (
    <div className={styles.todo_lists}>
      <div className={styles.flex_container}>
        <div onClick={() => onCheckTodoHandler(id)} className={classChange}>
          {title}
        </div>
        <FiCheckCircle
          onClick={() => onCheckTodoHandler(id)}
          className={`${classChange} ${styles.check_box}`}
        />
      </div>
    </div>
  );
};

export default DisplayTodo;
