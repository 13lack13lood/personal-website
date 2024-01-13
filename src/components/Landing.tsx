"use client";

import React from "react";
import styles from "../styles/Landing.module.css";
import DownArrow from "./DownArrow";
import Link from "next/link";

const Landing = () => {
	return (
		<Link href="/#Home" className="flex flex-col justify-end items-center w-full mb-24 min-h-screen">
			<div className="flex flex-col w-full h-[50vh] items-center justify-between">
				<div className={`text-white text-7xl text-left drop-shadow-glow ${styles.typewriter}`}>
					Hi, My name is Harry.&nbsp;
				</div>
				<div className="mb-32">
					<DownArrow />
				</div>
			</div>
		</Link>
	);
};

export default Landing;
