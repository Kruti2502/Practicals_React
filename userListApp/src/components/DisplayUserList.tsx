import React from "react";
import styles from "./DisplayUserList.module.css";
import { RiLock2Line, RiDeleteBin6Line } from "react-icons/ri";
import { UserListInterface } from "../App";

interface UserPropInterface {
  id: number;
  image: string;
  name: string;
  email: string;
  onMouseEnter: (arg: UserListInterface) => void;
  onMouseExit: () => void;
}

const DisplayUserList = ({
  id,
  image,
  name,
  email,
  onMouseEnter,
  onMouseExit,
}: UserPropInterface) => {
  const mouseEnterHandler = (userDetail: UserListInterface) => {
    onMouseEnter(userDetail);
  };
  const mouseExitHandler = () => {
    onMouseExit();
  };

  return (
    <>
      <div
        className={`${styles.flex_container} ${styles.users_container}`}
        onMouseEnter={() => mouseEnterHandler({ id, name, email, image })}
        onMouseLeave={mouseExitHandler}
      >
        <div className={`${styles.flex_container} ${styles.profile}`}>
          <img src={image} alt="profile-pic" className={styles.profile_img} />
          <div className={`${styles.flex_container} ${styles.users_info}`}>
            <div className={styles.name}>{name}</div>
            <div>{email}</div>
          </div>
        </div>
        {id === 1 ? (
          <>
            <div className={styles.active}>Active</div>
            <div className={styles.owner}>Owner</div>
            <RiLock2Line className={styles.icon} />
          </>
        ) : (
          <>
            <select className={styles.dropdown}>
              <option>Inactive</option>
              <option>Active</option>
            </select>
            <select className={styles.dropdown}>
              <option>Manager</option>
              <option>Read</option>
            </select>
            <RiDeleteBin6Line className={styles.icon} />
          </>
        )}
      </div>
    </>
  );
};

export default DisplayUserList;
