import React from "react";
import FooterIcons from "../footer/footer";

import "./hero.css";

const Hero = (props) => {
	return (
		<>
			<div className="wrapper-hero__text">
				<p
					data-name="inscription-title"
					className="inscription-title title-animation"
				>
					Меня зовут
				</p>
				<h2
					data-name="title-slider1"
					className=" title-slider1 title-animation"
				>
					Aleksandr
				</h2>
				<p data-name="sign-title" className="sign-title title-animation">
					и я frontend разработчик
				</p>
			</div>
			<div className="footer">
				<FooterIcons />
				<div className="scroll-wrapper">
					<span className="scroll down-scroll">scroll</span>
				</div>
			</div>
		</>
	);
};

export default Hero;
