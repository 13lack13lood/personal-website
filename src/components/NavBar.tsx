import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
	return (
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row fixed top-0 w-full p-4 px-2 sm:px-5 xl:px-10 h-fit backdrop-blur-sm z-[100] text-accent font-bold min-w-screen justify-between items-center">
			<Link
				href="./#Home"
				className="text-base sm:text-lg lg:text-2xl xl:text-3xl px-2 transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall"
			>
				{"Harry Zhu"}
			</Link>
			<div className="flex flex-row justify-center items-center space-x-7 sm:space-x-10 text-sm lg:text-base xl:text-lg">
				<Link
					href="./#About"
					className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall"
				>
					About
				</Link>
				<Link
					href="./#Projects"
					className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall"
				>
					Projects
				</Link>
				<Link
					href="./#Contact"
					className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall"
				>
					Contact
				</Link>
				<a
					href="./resume.pdf"
					target="_blank"
					className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall"
				>
					Resume
				</a>
				<ThemeSwitcher />
			</div>
		</div>
	);
};

export default NavBar;
