import Image from "next/image";
import Background from "../components/Background";
import Landing from "@/components/Landing";
import About from "@/components/About";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center bg-bgcolor min-w-fit w-full h-full">
            <Background />
            <Landing />
            <About />
        </main>
    );
}
