//Stateful component
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi"; //React icons
import styles from "./DisplayTodo.module.css";

interface TodoListsInterface {
  title: string;
}

const DisplayTodo = (props: TodoListsInterface) => {
  const [todoTask, setTodoTask] = useState(true);

  const changeStatusHandler = () => {
    setTodoTask((prevState) => !prevState);
  };
  const classChange = todoTask ? styles.todo_task : styles.complete_task;

  return (
    <div className={styles.todo_lists}>
      <div className={styles.flex_container}>
        <div onClick={changeStatusHandler} className={classChange}>
          {props.title}
        </div>
        <FiCheckCircle
          onClick={changeStatusHandler}
          className={`${classChange} ${styles.check_box}`}
        />
      </div>
    </div>
  );
};

export default DisplayTodo;
