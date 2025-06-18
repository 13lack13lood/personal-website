"use client";

import React from "react";
import AOSComponent from "./AOSComponent";
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
                    Hi, I&#39;m Harry Zhu and I&#39;m a second year <span className="text-accent-light font-semibold">Data Science</span> student at
                    the <span className="text-accent-light font-semibold">University of Waterloo</span>.
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-anchor="#About">
                    I am currently in Seattle, WA interning at <span className="text-accent-light font-semibold">AWS DynamoDB</span> working on
                    routing.
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="900" data-aos-anchor="#About">
                    Formerly, I was a <span className="text-accent-light font-semibold">Software Developer</span> at{" "}
                    <span className="text-accent-light font-semibold">TD Bank</span> on the portfolio analytics team and a{" "}
                    <span className="text-accent-light font-semibold">Full-stack Developer</span> at{" "}
                    <span className="text-accent-light font-semibold">BTNX</span>.
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="1100" data-aos-anchor="#About">
                    While I&#39;m not coding, you can find me playing piano, powerlifting, or playing poker with friends.
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="1300" data-aos-anchor="#About">
                    Here is some of my work below:
                </div>
            </div>
        </AOSComponent>
    );
};

export default About;
