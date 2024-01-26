import React from "react";
import Image from "next/image";
import InstagramLight from "../../public/instagramLight.svg";
import instagramDark from "../../public/instagramDark.svg";
import GitHubDark from "../../public/githubDark.svg";
import GitHubLight from "../../public/githubLight.svg";
import linkedinLight from "../../public/linkedinLight.svg";
import linkedinDark from "../../public/linkedinDark.svg";
import IconThemeSwitcher from "./IconThemeSwitcher";

const Socials = () => {
	return (
		<div className="border-t-2 border-accent w-11/12 lg:w-2/3 flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between items-center px-4 py-6 my-7">
			<div className="flex flex-col justify-center space-y-3 items-center lg:items-start">
				<div className="text-black dark:text-white text-2xl font-light">Harry Zhu</div>
				<a href={`mailto:harryzhu155@gmail.com`} className="text-black dark:text-white text-lg font-extralight">
					harryzhu155@gmail.com
				</a>
			</div>
			<div className="flex flex-row justify-center space-x-5">
				<a
					href="https://github.com/13lack13lood"
					target="_blank"
					className="transition-all duration-200 hover:scale-125"
				>
					<IconThemeSwitcher lighticon={GitHubLight} darkicon={GitHubDark} width={30} />
				</a>
				<a
					href="https://www.linkedin.com/in/harry-zhu-a2417326b/"
					target="_blank"
					className="transition-all duration-200 hover:scale-125"
				>
					<IconThemeSwitcher lighticon={linkedinLight} darkicon={linkedinDark} width={30} />
				</a>
				<a
					href="https://www.instagram.com/harryz409/"
					target="_blank"
					className="transition-all duration-200 hover:scale-125"
				>
					<IconThemeSwitcher lighticon={InstagramLight} darkicon={instagramDark} width={30} />
				</a>
			</div>
		</div>
	);
};

export default Socials;
