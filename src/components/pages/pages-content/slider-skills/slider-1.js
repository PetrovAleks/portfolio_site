import React, { Component } from "react";
import dataSliders from "../slider-skills/data-sliders";
import svg from "../images/svg/symbol-defs.svg";

class SliderMarkup extends Component {
	render(props) {
		const { sliderSkillsNumber, dataSliders } = this.props;
		const { title, skillsItem, skillsText, skillsSvg } = dataSliders[
			sliderSkillsNumber
		];
		return (
			<div className="about-skills">
				<div className="wrapper-about-skills skills-animation  ">
					<h3 className="skills-title">{title}</h3>
					<ul className="skills-list list-style">
						{skillsItem.map((item) => {
							return <li className="skills-item">{item}</li>;
						})}
					</ul>
				</div>
				<p className="skills-text skills-animation ">{skillsText}</p>
			</div>
		);
	}
}

class SliderMarkupSVG extends Component {
	render(props) {
		const { sliderSkillsNumber, dataSliders } = this.props;
		const { skillsSvg } = dataSliders[sliderSkillsNumber];
		return (
			<svg className="icon skills-animation " width="65%" height="65%">
				<use className="icon__item" href={`${svg}#${skillsSvg}`}></use>
			</svg>
		);
	}
}

export { SliderMarkup, SliderMarkupSVG };
