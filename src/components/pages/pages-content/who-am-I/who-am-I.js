import React, { Component } from "react";
import { SliderMarkup, SliderMarkupSVG } from "../slider-skills/slider-1";
import "./who-am-I.css";
import dataSliders from "../slider-skills/data-sliders";
import svg from "../images/svg/social.svg";

export default class WhoAmI extends Component {
	state = {
		sliderSkillsNumber: 0,
	};
	intervalId = null;
	refs = null;
	componentDidMount() {
		this.refs = {
			aboutSkills: document.querySelector(".wrapper-about-skills "),
			aboutSkillsSvg: document.querySelector(".icon"),
			skillsText: document.querySelector(".skills-text"),
		};
	}

	setNextSlider = () => {
		const { aboutSkills, aboutSkillsSvg, skillsText } = this.refs;

		aboutSkills.classList.add("about-skills-next");
		aboutSkillsSvg.classList.add("about-skills-next");
		skillsText.classList.add("about-skills-next");

		setTimeout(() => {
			if (this.state.sliderSkillsNumber + 1 === dataSliders.length) {
				this.setState({
					sliderSkillsNumber: 0,
				});
			} else {
				this.setState((prevState) => {
					return {
						sliderSkillsNumber: prevState.sliderSkillsNumber + 1,
					};
				});
			}

			aboutSkills.classList.remove("about-skills-next");
			aboutSkillsSvg.classList.remove("about-skills-next");
			skillsText.classList.remove("about-skills-next");
		}, 500);
	};
	setPreviousSlider = () => {
		const { aboutSkills, aboutSkillsSvg, skillsText } = this.refs;

		aboutSkills.classList.add("about-skills-previous");
		aboutSkillsSvg.classList.add("about-skills-previous");
		skillsText.classList.add("about-skills-previous");
		setTimeout(() => {
			if (this.state.sliderSkillsNumber <= 0) {
				this.setState({
					sliderSkillsNumber: dataSliders.length - 1,
				});
			} else {
				this.setState((prevState) => {
					return {
						sliderSkillsNumber: prevState.sliderSkillsNumber - 1,
					};
				});
			}

			aboutSkills.classList.remove("about-skills-previous");
			aboutSkillsSvg.classList.remove("about-skills-previous");
			skillsText.classList.remove("about-skills-previous");
		}, 500);
	};

	render() {
		return (
			<>
				<div className="about-me">
					<h2 data-name="about-title" className="about-title about-animation ">
						about me
					</h2>
					<p data-name="about-text" className="about-text about-animation ">
						За год обучения по специальности, освоил ряд необходимых навыков в
						современной разработке web приложений. Я с удовольствием и легкость
						изучаю все новое в проффесиональном направлении и слежу за новыми
						технологиями разработки. В этом разделе можно увидеть основнй список
						моих навыков
					</p>
				</div>
				<div className="skills-wrapper ">
					<SliderMarkup
						dataSliders={dataSliders}
						sliderSkillsNumber={this.state.sliderSkillsNumber}
					/>
					<div className="wrapper-btn ">
						<button
							onClick={this.setPreviousSlider}
							data-action="previous"
							className="btn-slider__skills btn-about-animation "
						>
							<svg className="social-item__ico" width="1vw" height="2vh">
								<use href={`${svg}#icoback`} alt="Viber"></use>
							</svg>
						</button>
						<button
							onClick={this.setNextSlider}
							data-action="next"
							className="btn-slider__skills btn-about-animation "
						>
							<svg className="social-item__ico" width="1vw" height="2vh">
								<use href={`${svg}#iconext`} alt="Viber"></use>
							</svg>
						</button>
					</div>
					<div className="skills-img ">
						<SliderMarkupSVG
							dataSliders={dataSliders}
							sliderSkillsNumber={this.state.sliderSkillsNumber}
						/>
					</div>
				</div>
			</>
		);
	}
}
