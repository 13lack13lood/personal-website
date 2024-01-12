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
        title: "Hands-on Fluency",
        desciption: "A sign language learning platform as a web application, during the NewHacks hackathon, that teaches and quizzes the user on content using their webcam with OpenCV and MediaPipe.",
        technologies: ["JavaScript", "Python", "React", "Flask", "TensorFlow", "OpenCV"],
        github: "https://github.com/13lack13lood/Hands-On-Fluency",
    },
    {
        title: "AI Music Recommendations",
        desciption: "A full-stack web application that uses a user's Spotify data to generate music recommendations using OpenAI's GPT 3.5 Turbo.",
        technologies: ["JavaScript", "React", "Express.js"],
        github: "https://github.com/13lack13lood/AI-Music-Recommendations",
    },
    {
        title: "StockNewsSentiment",
        desciption: "A natural language processing model to analyze the sentiment of financial text powered by an LSTM recurrent neural network trained on over 5000 unique financial headlines.",
        technologies: ["Python", "TensorFlow", "Pandas", "Numpy"],
        github: "https://github.com/13lack13lood/StockNewsSentiment",
    },
    {
        title: "Clownsweeper",
        desciption: "A spin-off of the popular 2D game, Minesweeper, made using OpenGL, LWJGL, and OpenAL.",
        technologies: ["Java", "OpenGL", "OpenAL", "LWJGL"],
        github: "https://github.com/13lack13lood/Clownsweeper",
    },
    {
        title: "Weather App",
        desciption: "A simple and sleek weather app designed with React featuring current weather and forcast as well as supporting city search.",
        technologies: ["TypeScript", "React"],
        github: "https://github.com/13lack13lood/react-weather-app",
    },
];

const Projects = () => {
    return (
        <AOSComponent>
            <div id="Projects" className="flex flex-col w-full min-h-screen p-20">
                <div className="grid grid-cols-3 w-full gap-16">
                    {ProjectDetails.map((value, index) => {
                        return <ProjectCard key={value.title + "_project_card"} info={value} index={index} />;
                    })}
                </div>
            </div>
        </AOSComponent>
    );
};

export default Projects;
