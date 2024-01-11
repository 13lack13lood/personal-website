import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex flex-row fixed top-0 w-full p-4 px-10 h-fit backdrop-blur-sm z-[100] text-accent font-bold min-w-screen justify-between items-center">
            <div className="text-3xl px-2 ">{"Harry Zhu"}</div>
            <div className="flex flex-row justify-center space-x-10 text-lg">
                <Link href="./#About" className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall">
                    About
                </Link>
                <Link href="./#Projects" className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall">
                    Projects
                </Link>
                <Link href="./#Contact" className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall">
                    Contact
                </Link>
                <Link href="./#About" className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall">
                    Resume
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
