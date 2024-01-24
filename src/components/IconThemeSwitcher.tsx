"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
    lighticon: StaticImport;
    darkicon: StaticImport;
    width: number;
}

const IconThemeSwitcher = ({ lighticon, darkicon, width }: Props) => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return <Image src={darkicon} className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall" alt="light theme" width={width} />;
        } else {
            return <Image src={lighticon} className="transition-all duration-300 hover:scale-110 hover:drop-shadow-glowSmall" alt="dark theme" width={width} />;
        }
    };

    return <>{renderThemeChanger()}</>;
};

export default IconThemeSwitcher;
