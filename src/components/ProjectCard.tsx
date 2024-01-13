"use client";

import React from "react";
import AOSComponent from "./AOSComponent";

interface Props {
	info: { title: string; desciption: string; technologies: string[]; github: string };
	index: number;
}

const ProjectCard = ({ info, index }: Props) => {
	return (
		<AOSComponent>
			<div
				className="p-4 w-full h-full border border-accent-light rounded-3xl backdrop-blur-xs bg-transparent shadow-glow group "
				data-aos="reveal"
				data-aos-delay={2 * index + 1 + "00"}
				id={"project" + index}
			>
				<div className="flex flex-col w-full h-full items-center justify-start p-6">
					<div
						data-aos="flip-up"
						data-aos-delay={2 * index + 10 + "00"}
						className="text-7xl text-accent-light opacity-30 tracking-wider font-bold w-5/6 text-right mb-5"
					>{`0${index + 1}`}</div>
					<div className="flex flex-col h-full items-center">
						<div
							className="text-white text-3xl font-semibold mb-4 w-full text-center border-b-2 border-accent-light pb-1"
							data-aos="fade-right"
							data-aos-delay={2 * index + 3 + "00"}
						>
							{info.title}
						</div>
						<div
							className="flex flex-col justify-center text-white font-light grow"
							data-aos="zoom-in-up"
							data-aos-delay={2 * index + 4 + "00"}
						>
							{info.desciption}
						</div>
						<div className="text-accent-light w-full grid grid-cols-3 justify-center items-center gap-3 font-semibold mt-10">
							{info.technologies.map((tech, tech_index) => {
								return (
									<div
										key={info.title + "_" + tech}
										className="text-xs border-2 border-accent py-1 px-2 text-center"
										data-aos="zoom-in-up"
										data-aos-offset="-100"
										data-aos-delay={2 * index + 5 + tech_index + "00"}
									>
										{tech}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</AOSComponent>
	);
};

export default ProjectCard;
