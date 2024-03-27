"use client";

import React from "react";
import AOSComponent from "./AOSComponent";
import ProjectCard from "./ProjectCard";

const ProjectDetails: { title: string; desciption: string; technologies: string[]; github: string }[] = [
	{
		title: "FinTrack",
		desciption:
			"FinTrack is a full-stack equity analysis web application providing comprehensive analytics into market activity, engineered with Next.js, React, and Tailwind, adhering to Google’s Material Design 3 UI/UX design language and framework.",
		technologies: ["TypeScript", "Python", "Next.js", "React", "Flask"],
		github: "https://github.com/13lack13lood/FinTrack",
	},
	{
		title: "StockNewsSentiment",
		desciption:
			"A natural language processing model to analyze the sentiment of financial text with over 88% accuracy powered by an LSTM recurrent neural network trained on almost 50,000 unique financial headlines.",
		technologies: ["Python", "TensorFlow", "Sklearn", "Pandas", "Numpy", "BeautifulSoup"],
		github: "https://github.com/13lack13lood/StockNewsSentiment",
	},
	{
		title: "Financial Portfolio Optimizer",
		desciption:
			"A Quantitative Financial model in Java, utilizing Machine Learning through a genetic algorithm and applying statistical modeling to optimize investment portfolios, simultaneously maximizing returns while minimizing risk.",
		technologies: ["Java", "TypeScript", "Spring Boot", "Docker", "AWS", "Next.js"],
		github: "https://github.com/13lack13lood/Financial-Portfolio-Optimizer",
	},
	{
		title: "Hands-on Fluency",
		desciption:
			"A sign language learning platform as a web application, during the NewHacks hackathon, that teaches and quizzes the user on content using their webcam with OpenCV and MediaPipe.",
		technologies: ["JavaScript", "Python", "React", "Flask", "TensorFlow", "OpenCV"],
		github: "https://github.com/13lack13lood/Hands-On-Fluency",
	},
	{
		title: "AI Music Recommendations",
		desciption:
			"A full-stack web application that uses a user's Spotify data to generate music recommendations using OpenAI's GPT 3.5 Turbo.",
		technologies: ["JavaScript", "React", "Express.js"],
		github: "https://github.com/13lack13lood/AI-Music-Recommendations",
	},
	{
		title: "Clownsweeper",
		desciption:
			"A re-creation and spin-off of the popular 2D game, Minesweeper, made in Java using OpenGL, LWJGL, and OpenAL.",
		technologies: ["Java", "OpenGL", "OpenAL", "LWJGL"],
		github: "https://github.com/13lack13lood/Clownsweeper",
	},
];

const Projects = () => {
	return (
		<AOSComponent>
			<div
				id="Projects"
				className="flex flex-col items-center justify-between space-y-12 w-full min-h-screen p-5 sm:p-10 lg:p-20"
			>
				<div
					className="text-4xl border-b-2 border-accent text-accent dark:text-white mb-5 text-center px-16 py-4 w-fit mx-auto font-bold drop-shadow-glowSmall"
					data-aos="flip-up"
				>
					Projects
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-16">
					{ProjectDetails.map((value, index) => {
						return <ProjectCard key={value.title + "_project_card"} info={value} index={index} />;
					})}
				</div>
			</div>
		</AOSComponent>
	);
};

export default Projects;
