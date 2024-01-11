import React from "react";

const NavBar = () => {
    return (
        <div className="flex flex-row fixed top-0 w-full p-4 px-10 h-fit backdrop-blur-xs z-[100] text-accent font-bold min-w-screen justify-between items-center">
            <div className="text-4xl font-light drop-shadow-glowSmall transition-all duration-200 hover:scale-125">Harry Zhu</div>
            <div className="flex flex-row justify-center space-x-10 text-xl">
                <div className="drop-shadow-glowSmall transition-all duration-200 hover:scale-125">About</div>
                <div className="drop-shadow-glowSmall transition-all duration-200 hover:scale-125">Projects</div>
                <div className="drop-shadow-glowSmall transition-all duration-200 hover:scale-125">Contact</div>
                <div className="drop-shadow-glowSmall transition-all duration-200 hover:scale-125">Resume</div>
            </div>
        </div>
    );
};

export default NavBar;
