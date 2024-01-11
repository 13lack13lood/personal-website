import React from "react";

const About = () => {
    return (
        <div id="About" className="flex flex-col bg-bgcolor text-white text-lg w-2/3 backdrop-blur-xs mb-10 space-y-8 font-light">
            <div className="text-3xl border-b-2 border-accent mb-3 text-center p-2 w-fit mx-auto font-bold">About Me</div>
            <div className="">
                Hi, I'm Harry Zhu and I'm a first year <span className="text-accent-light font-semibold">Mathematics</span> student at the <span className="text-accent-light font-semibold">University of Waterloo</span>.
            </div>
            <div className="">
                In my current school term, I am taking 6 courses: Calculus 2 (MATH 138), Linear Algebra 1 (MATH 136), Elementary Algorithm Design and Data Abstraction (CS 136), Tools and Techniques for Software Development (CS 136),
                Fundamentals of Music Theory (MUSIC 111), and I am fast-tracking Probability (STAT 230).
            </div>
            <div className="">
                I am super passionate about <span className="text-accent-light font-semibold">Computer Science</span>, particularly <span className="text-accent-light font-semibold">Full-Stack development</span> and&nbsp;
                <span className="text-accent-light font-semibold">Deep Learning</span>. I also love networking and collaborating to design high-quality and innovative software projects. I build mostly in&nbsp;
                <span className="text-accent-light font-semibold">TypeScript, JavaScript, and Python</span> with strong competencies in&nbsp;
                <span className="text-accent-light font-semibold">Next.js, React, Flask, Express.js, TensorFlow, OpenCV, and Pandas</span> though I love learning and I constantly strive to master new technologies.
            </div>
            <div className="">While I'm not coding, you can find me playing piano, powerlifting, or playing poker with friends or at UW Poker Club.</div>
            <div className="">Here is some of my work:</div>
        </div>
    );
};

export default About;
