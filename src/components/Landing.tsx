"use client";

import React from "react";
import styles from "../styles/Landing.module.css";
import DownArrow from "./DownArrow";
import Link from "next/link";

const Landing = () => {
	return (
		<div className="flex flex-col justify-end items-center w-full mb-24 min-h-screen">
			<div className="flex flex-col w-full h-[50vh] items-center justify-between">
				<div className={`text-white text-7xl text-left drop-shadow-glow ${styles.typewriter}`}>
					Hi, My name is Harry.&nbsp;
				</div>
				<a href="/#About" className="mb-32">
					<DownArrow />
				</a>
			</div>
		</div>
	);
};

export default Landing;
