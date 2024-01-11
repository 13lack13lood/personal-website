import Image from "next/image";
import Background from "../components/Background";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<main className="flex flex-col bg-bgcolor items-center justify-center min-w-fit w-full h-full">
			<Background />
			<Landing />
			<About />
			<Projects />
		</main>
	);
}
