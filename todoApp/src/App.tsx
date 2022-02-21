import React from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import Date from "./components/Date";
import TodoLists from "./components/TodoLists";

const App = () => {
  return (
    <div className={styles.container}>
      <Date />
      <TodoLists />
      <Button />
    </div>
  );
};

export default App;
