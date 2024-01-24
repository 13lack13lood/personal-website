import Image from "next/image";
import Background from "../components/Background";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";

export default function Home() {
    return (
        <div className="flex flex-col bg-white dark:bg-bgcolor items-center justify-center min-w-fit w-full h-full">
            <Background />
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Socials />
        </div>
    );
}
