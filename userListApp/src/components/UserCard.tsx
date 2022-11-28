import React from "react";
import styles from "./UserCard.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FetchUserDataInterface } from "../redux/ActionTypes";

const UserCard = ({
  id,
  avatar,
  first_name,
  last_name,
  email,
}: FetchUserDataInterface) => {
  return (
    <>
      <div className={`${styles.flex_container} ${styles.card_container}`}>
        <img src={avatar} alt="profile-pic" className={styles.profile_img} />
        <div
          className={`${styles.flex_container} ${styles.username_container}`}
        >
          <div className={styles.name}>
            {first_name} {last_name}
          </div>
          {id === 1 && <BsPatchCheckFill className={styles.icon} />}
        </div>
        <div className={styles.email}>{email}</div>
        <div className={styles.plan}>Your plan: Standard</div>
        <button className={styles.button}>Active User</button>
        <div className={styles.plan_uses}>Plan Uses</div>
        <div className={styles.progress_bar}>
          <div className={styles.progress}></div>
        </div>
        <div className={`${styles.flex_container} ${styles.clicks_container}`}>
          <div>
            <div className={styles.clicks}>2,450</div>
            <div className={styles.clicks_reviewed}>Clicks reviewed</div>
          </div>
          <div className={styles.hr}></div>
          <div>
            <div className={styles.clicks}>5000</div>
            <div className={styles.clicks_reviewed}>Monthly clicks</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
