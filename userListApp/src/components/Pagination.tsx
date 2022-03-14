import React from "react";
import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface SelectedPageInterface {
  selected: number;
}
interface PagePropHandler {
  onPageClicked: (arg: number) => void;
}

const Pagination = ({ onPageClicked }: PagePropHandler) => {
  const handlePageClick = (data: SelectedPageInterface) => {
    onPageClicked(data.selected + 1);
  };
  return (
    <ReactPaginate
      previousLabel="<<"
      pageCount={2}
      nextLabel=">>"
      onPageChange={handlePageClick}
      containerClassName={styles.container}
      pageClassName={styles.pages}
      previousLinkClassName={styles.link}
      nextLinkClassName={styles.link}
      activeClassName={styles.active_page}
      disabledLinkClassName={styles.disable}
    />
  );
};

export default Pagination;
