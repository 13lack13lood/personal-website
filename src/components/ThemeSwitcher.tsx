"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import lightIcon from "../../public/lightmode.svg";
import darkIcon from "../../public/darkmode.svg";
import Image from "next/image";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setTheme("dark");
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const renderThemeChanger = () => {
		const currentTheme = theme;

		if (currentTheme === "dark") {
			return (
				<Image
					src={lightIcon}
					className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall"
					alt="light theme"
					width={30}
					height={30}
					onClick={() => setTheme("light")}
				/>
			);
		} else {
			return (
				<Image
					src={darkIcon}
					className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall"
					alt="dark theme"
					width={30}
					height={30}
					onClick={() => setTheme("dark")}
				/>
			);
		}
	};

	return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
