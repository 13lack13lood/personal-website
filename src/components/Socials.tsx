import React from "react";
import Image from "next/image";
import instagram from "../../public/instagram.svg";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";

const Socials = () => {
	return (
		<div className="border-t-2 border-accent w-2/3 flex flex-row justify-between items-center px-4 py-6 my-10">
			<div className="flex flex-col justify-center space-y-4">
				<div className="text-white text-2xl font-light">Harry Zhu</div>
				<a href={`mailto:harryzhu155@gmail.com`} className="text-white text-lg font-extralight">
					harryzhu155@gmail.com
				</a>
			</div>
			<div className="flex flex-row justify-center space-x-5">
				<a
					href="https://github.com/13lack13lood"
					target="_blank"
					className="transition-all duration-200 hover:scale-125"
				>
					<Image src={github} alt="github icon" width={30}></Image>
				</a>
				<a
					href="https://www.linkedin.com/in/harry-zhu-a2417326b/"
					target="_blank"
					className="transition-all duration-200 hover:scale-125"
				>
					<Image src={linkedin} alt="linkedin icon" width={30}></Image>
				</a>
				<a
					href="https://www.instagram.com/harryz409/"
					target="_blank"
					className="transition-all duration-200 hover:scale-125"
				>
					<Image src={instagram} alt="instagram icon" width={30}></Image>
				</a>
			</div>
		</div>
	);
};

export default Socials;
