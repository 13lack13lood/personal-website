"use client";

import React from "react";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className="flex flex-col justify-end items-center w-full mb-24 min-h-screen">
            <div className="flex flex-col w-full h-[50vh] items-center justify-between">
                <div className={`text-white text-6xl text-left drop-shadow-glow ${styles.typewriter}`}>Hi, My name is Harry.&nbsp;</div>
                <div className=" text-white">asdf</div>
            </div>
        </div>
    );
};

export default Landing;
