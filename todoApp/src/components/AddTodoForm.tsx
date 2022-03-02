import React, { useEffect, useState } from "react";
import styles from "./AddTodoForm.module.css";
import { TodoListInterface } from "../App";
import { v4 as uuidv4 } from "uuid"; //uuid library
import moment from "moment";

interface AddTodoFormInterface {
  onCancelClicked: (arg: boolean) => void;
  onSubmitClicked: () => void;
}

const AddTodoForm = ({
  onCancelClicked,
  onSubmitClicked,
}: AddTodoFormInterface) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [entered, setEntered] = useState(true);

  //Onchange input handler
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  //For submit button
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (enteredValue === "") {
      setEntered(false);
    } else {
      setEntered(true);
      let todoArray: TodoListInterface[] = JSON.parse(
        localStorage.getItem("todo") || "[]"
      );
      if (typeof enteredValue === "string") {
        const todoTask: TodoListInterface = {
          id: uuidv4(),
          title: enteredValue,
          date: `${moment().format("D")}/${moment().format(
            "M"
          )}/${moment().format("YYYY")}`,
          isCompleted: false,
        };
        todoArray.push(todoTask);
        todoArray = todoArray.filter((todo) => {
          const curDate = `${moment().format("D")}/${moment().format(
            "M"
          )}/${moment().format("YYYY")}`;
          return curDate === todo.date;
        });
        localStorage.setItem("todo", JSON.stringify(todoArray));
        onSubmitClicked();
      }
      onCancelClicked(false);
    }
  };

  //For cancel button
  const cancelHandler = () => {
    onCancelClicked(false);
  };

  //For keyboard events
  useEffect(() => {
    const handleKeyboardEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancelClicked(false);
      }
    };
    document.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [onCancelClicked]);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        autoFocus
        placeholder="Enter a task"
        onChange={inputHandler}
      />
      {!entered && <p className={styles.error_text}>Enter something!</p>}
      <div className={styles.flex_container}>
        <button type="button" className={styles.button} onClick={cancelHandler}>
          Cancel
        </button>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default AddTodoForm;
