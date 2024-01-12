"use client";

import React from "react";
import AOSComponent from "./AOSComponent";
import DownArrow from "./DownArrow";

const About = () => {
    return (
        <AOSComponent>
            <div id="About" className="flex flex-col text-white min-h-screen justify-center text-lg w-2/3 backdrop-blur-xs mb-10 space-y-8 font-light pt-20">
                <div className="text-3xl border-b-2 border-accent mb-5 text-center px-10 py-4 w-fit mx-auto font-bold drop-shadow-glowSmall" data-aos="flip-up" data-aos-delay="100" data-aos-anchor="#About">
                    About Me
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-anchor="#About">
                    Hi, I'm Harry Zhu and I'm a first year <span className="text-accent-light font-semibold">Mathematics</span> student at the <span className="text-accent-light font-semibold">University of Waterloo</span>.
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-anchor="#About">
                    In my current school term, I am taking 6 courses: Calculus 2 (MATH 138), Linear Algebra 1 (MATH 136), Elementary Algorithm Design and Data Abstraction (CS 136), Tools and Techniques for Software Development (CS 136L),
                    Fundamentals of Music Theory (MUSIC 111), and I am fast-tracking Probability (STAT 230).
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-anchor="#About">
                    I am super passionate about <span className="text-accent-light font-semibold">Computer Science</span>, particularly <span className="text-accent-light font-semibold">Full-Stack development</span> and&nbsp;
                    <span className="text-accent-light font-semibold">Deep Learning</span>. I also love networking and collaborating to design high-quality and innovative software projects. I build mostly in&nbsp;
                    <span className="text-accent-light font-semibold">TypeScript, JavaScript, and Python</span> with strong competencies in&nbsp;
                    <span className="text-accent-light font-semibold">Next.js, React, Flask, Express.js, TensorFlow, OpenCV, and Pandas</span> though I love learning and I constantly strive to master new technologies.
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="600" data-aos-anchor="#About">
                    While I'm not coding, you can find me playing piano, powerlifting, or playing poker with friends or at UW Poker Club.
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="700" data-aos-anchor="#About">
                    Here is some of my work below:
                </div>
            </div>
        </AOSComponent>
    );
};

export default About;
