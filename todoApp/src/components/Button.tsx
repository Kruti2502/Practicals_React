import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import styles from "./Button.module.css";

interface ButtonInterface {
  onButtonClicked: () => void;
}

const Button = ({ onButtonClicked }: ButtonInterface) => {
  const [clicked, setClicked] = useState(false);

  const buttonHandler = () => {
    setClicked((prevState) => !prevState);
  };
  const cancelHandler = (state: boolean) => {
    setClicked(state);
  };
  const submitHandler = () => {
    onButtonClicked();
  };

  return (
    <>
      {clicked && (
        <AddTodoForm
          onCancelClicked={cancelHandler}
          onSubmitClicked={submitHandler}
        />
      )}
      {!clicked && (
        <button onClick={buttonHandler} className={styles.button}>
          +
        </button>
      )}
    </>
  );
};

export default Button;
