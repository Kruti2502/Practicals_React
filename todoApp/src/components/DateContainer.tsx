import { Component } from "react";
import styles from "./DateContainer.module.css";
import moment from "moment"; // moment library

class DateContainer extends Component {
  date = moment().format("D");
  month = moment().format("MMM");
  year = moment().format("YYYY");
  day = moment().format("dddd");
  render() {
    return (
      <div className={styles.flex_container}>
        <div className={styles.flex1}>
          <div className={styles.date}>{this.date}</div>
          <div className={styles.month_year}>
            <div className={styles.month}>{this.month}</div>
            <div className={styles.year}>{this.year}</div>
          </div>
        </div>
        <div className={styles.flex2}>{this.day}</div>
      </div>
    );
  }
}
export default DateContainer;
