import React, { useState } from "react";
import styles from "./App.module.css";
import DisplayUserList from "./components/DisplayUserList";
import Header from "./components/Header";
import image from "./components/Images/Images";
import UserCard from "./components/UserCard";

export interface UserListInterface {
  id: number;
  image: string;
  name: string;
  email: string;
}

const userList: UserListInterface[] = [
  {
    id: 1,
    image: image.Chris,
    name: "Chris Evans",
    email: "chris.evans@yahoo.com",
  },
  {
    id: 2,
    image: image.Emma,
    name: "Emma Watson",
    email: "emma.watson@gmail.com",
  },
  {
    id: 3,
    image: image.Tom,
    name: "Tom Holland",
    email: "tom.holland@gmail.com",
  },
  {
    id: 4,
    image: image.TomCruise,
    name: "Tom Cruise",
    email: "tom.cruise@gmail.com",
  },
  {
    id: 5,
    image: image.Isabela,
    name: "Isabela Merced",
    email: "isabela.merced@yahoo.com",
  },
  {
    id: 6,
    image: image.Christian,
    name: "Christian Bale",
    email: "christian.bale@gmail.com",
  },
  {
    id: 7,
    image: image.Matthew,
    name: "Matthew Perry",
    email: "matthew.perry@yahoo.com",
  },
  {
    id: 8,
    image: image.Selena,
    name: "Selena Gomez",
    email: "selena.gomez@gmail.com",
  },
  {
    id: 9,
    image: image.Zendaya,
    name: "Zendaya",
    email: "zendaya@yahoo.com",
  },
];

const App = () => {
  const [hovered, setHovered] = useState<UserListInterface | null>(null);
  const mouseEnterHandler = (userDetail: UserListInterface) => {
    setHovered(userDetail);
  };
  const mouseExitHandler = () => {
    setHovered(null);
  };

  return (
    <div className={styles.flex_container}>
      <Header />
      <div className={`${styles.flex_container} ${styles.container}`}>
        <div className={`${styles.flex_container} ${styles.users_container}`}>
          {userList.map((user) => (
            <DisplayUserList
              key={user.id}
              {...user}
              onMouseEnter={mouseEnterHandler}
              onMouseExit={mouseExitHandler}
            />
          ))}
        </div>
        {hovered && <UserCard {...hovered} />}
      </div>
    </div>
  );
};

export default App;
