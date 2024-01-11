import React from "react";
import styles from "../styles/DownArrow.module.css";

const DownArrow = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
        </div>
    );
};

export default DownArrow;
