import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import DisplayUserList from "./components/DisplayUserList";
import Header from "./components/Header";
import { ImSpinner2 } from "react-icons/im";
import UserCard from "./components/UserCard";
import Pagination from "./components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./redux/Store";
import { fetchUsers } from "./redux/Actions";
import { StateInterface, FetchUserDataInterface } from "./redux/ActionTypes";

const App = () => {
  const [hovered, setHovered] = useState<FetchUserDataInterface | null>(null);
  const [activePage, setActivePage] = useState(1);
  const userState: StateInterface = useSelector(
    (state: RootStore) => state.reducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(activePage));
  }, [dispatch, activePage]);

  const mouseEnterHandler = (userDetail: FetchUserDataInterface) => {
    setHovered(userDetail);
  };
  const mouseExitHandler = () => {
    setHovered(null);
  };
  const pageChangeHandler = (activePageNumber: number) => {
    setActivePage(activePageNumber);
  };
  return (
    <>
      {userState.loading ? (
        <ImSpinner2 className={styles.loading} />
      ) : userState.error ? (
        <p className={styles.error}>Oops! {userState.error}</p>
      ) : (
        <div className={`${styles.flex_container} ${styles.container}`}>
          <div
            className={`${styles.flex_container} ${styles.container_profile}`}
          >
            <div
              className={`${styles.flex_container} ${styles.container_users_list}`}
            >
              <Header />
              <div
                className={`${styles.flex_container} ${styles.container_user}`}
              >
                {userState.users.map((user: any) => (
                  <DisplayUserList
                    key={user.id}
                    {...user}
                    onMouseEnter={mouseEnterHandler}
                    onMouseExit={mouseExitHandler}
                  />
                ))}
              </div>
            </div>
            {hovered && <UserCard {...hovered} />}
          </div>
          <div className={styles.pagination}>
            <Pagination onPageClicked={pageChangeHandler} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
