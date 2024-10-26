"use client";

import React from "react";
import AOSComponent from "./AOSComponent";
import DownArrow from "./DownArrow";
import Image from "next/image";

const About = () => {
	return (
		<AOSComponent>
			<div
				id="About"
				className="flex flex-col text-black dark:text-white justify-center text-base sm:text-lg w-11/12 sm:w-3/4 lg:w-2/3 backdrop-blur-xs mb-10 space-y-10 font-light pt-20"
			>
				<div
					className="text-4xl border-b-2 text-accent dark:text-white border-accent mb-5 text-center px-10 py-4 w-fit mx-auto font-bold drop-shadow-glowSmall"
					data-aos="flip-up"
					data-aos-delay="100"
					data-aos-anchor="#About"
					data-aos-offset="300"
				>
					About Me
				</div>
				<Image
					src="/profile_picture.jpg"
					alt="profile picture"
					width={200}
					height={100}
					className="border-4 border-accent-light rounded-full drop-shadow-glowSmall mx-auto"
					data-aos="flip-down"
					data-aos-delay="400"
					data-aos-anchor="#About"
				/>

				<div data-aos="zoom-in-up" data-aos-delay="300" data-aos-anchor="#About">
					Hi, I&#39;m Harry Zhu and I&#39;m a second year{" "}
					<span className="text-accent-light font-semibold">Data Science</span> student at the{" "}
					<span className="text-accent-light font-semibold">University of Waterloo</span>.
				</div>
				<div data-aos="zoom-in-up" data-aos-delay="500" data-aos-anchor="#About">
					In my current school term, I am taking 6 courses: Object-Oriented Software Development (CS 246),
					Introduction to Optimization (CO 250), Statistics (STAT 231), Introduction to Combinatorics (MATH
					239), Linear Algebra 2 (MATH 235), and Classical Mythology (CLAS 104).
				</div>
				<div data-aos="zoom-in-up" data-aos-delay="700" data-aos-anchor="#About">
					I am super passionate about{" "}
					<span className="text-accent-light font-semibold">Computer Science</span>, particularly{" "}
					<span className="text-accent-light font-semibold">Full-Stack development</span> and&nbsp;
					<span className="text-accent-light font-semibold">Deep Learning</span>. I also love networking and
					collaborating to design high-quality and innovative software projects. I build mostly in&nbsp;
					<span className="text-accent-light font-semibold">TypeScript, JavaScript, and Python</span> with
					strong competencies in&nbsp;
					<span className="text-accent-light font-semibold">
						Next.js, React, .NET, Blazor, Flask, TensorFlow, and Pandas
					</span>{" "}
					though I love learning and I constantly strive to master new technologies.
				</div>
				<div data-aos="zoom-in-up" data-aos-delay="900" data-aos-anchor="#About">
					Formerly, I was a <span className="text-accent-light font-semibold">Full-stack Developer</span> at{" "}
					<span className="text-accent-light font-semibold">BTNX</span>, in charge of leveraging a versatile
					tech stack, consisting of{" "}
					<span className="text-accent-light font-semibold">
						React, TypeScript, JavaScript, C#, .NET, and SQL Server
					</span>
					.
				</div>
				<div data-aos="zoom-in-up" data-aos-delay="1100" data-aos-anchor="#About">
					While I&#39;m not coding, you can find me playing piano, powerlifting, or playing poker with friends
					or at UW Poker Club.
				</div>
				<div data-aos="zoom-in-up" data-aos-delay="1300" data-aos-anchor="#About">
					Here is some of my work below:
				</div>
			</div>
		</AOSComponent>
	);
};

export default About;
