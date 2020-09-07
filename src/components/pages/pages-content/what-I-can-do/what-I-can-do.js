import React, { Component } from "react";
import { dataImg, dataPreview } from "../slider-portfolio/data-slider";
import svg from "../images/svg/social.svg";
import { SliderPreviewList, SliderPreview } from "../slider-portfolio/slider";
import "./what-I-can-do.css";

export default class WhaIcanDo extends Component {
	state = {
		itemId: 0,
		sliderImg: 0,
	};
	sliderId = 0;
	refs = null;

	componentDidMount() {
		this.refs = {
			itemImg: document.querySelectorAll(".portfolio-item"),
			previewAnimation: document.querySelectorAll(".portfolio-item__preview"),
		};
	}

	removeClassSelected() {
		this.refs.itemImg.forEach((el) => {
			el.classList.remove("selected");
		});
	}
	setItemId = (e) => {
		const { itemImg, previewAnimation } = this.refs;
		const id = e.target.dataset.id;
		this.removeClassSelected();
		itemImg.forEach((element) => {
			if (element.dataset.id === id) {
				element.classList.add("selected");
			}
		});

		previewAnimation.forEach((el) => {
			el.classList.remove("selected-item");
			el.classList.add("sleected-item--reverse");
		});

		setTimeout(() => {
			this.setState({
				itemId: id,
			});
			console.log("add");

			previewAnimation.forEach((el) => {
				el.classList.add("selected-item");
				el.classList.remove("sleected-item--reverse");
			});
		}, 800);
	};

	setNextItemId = () => {
		this.removeClassSelected();
		const img = this.state.sliderImg;
		this.refs.itemImg.forEach((el) => {
			el.classList.add("about-portfolio-next");
		});

		setTimeout(() => {
			if (this.state.sliderImg + 2 >= dataImg.length) {
				this.setState({
					sliderImg: 0,
				});
			} else {
				this.setState(() => {
					return {
						sliderImg: this.state.sliderImg + 2,
					};
				});
			}
		}, 800);

		setTimeout(() => {
			this.refs.itemImg.forEach((el) => {
				el.classList.add("selected-item");
				el.classList.remove("about-portfolio-next");
			});
		}, 1100);
	};
	setPreviousItemId = () => {
		this.removeClassSelected();
		const img = this.state.sliderImg;
		this.refs.itemImg.forEach((el) => {
			el.classList.add("about-portfolio-previous");
		});

		setTimeout(() => {
			if (this.state.sliderImg <= 0) {
				this.setState({
					sliderImg: dataImg.length - 2,
				});
			} else {
				this.setState(() => {
					return {
						sliderImg: this.state.sliderImg - 2,
					};
				});
			}
		}, 800);

		setTimeout(() => {
			this.refs.itemImg.forEach((el) => {
				el.classList.add("selected-item");
				el.classList.remove("about-portfolio-previous");
			});
		}, 1100);
	};
	render() {
		const { itemId, sliderImg } = this.state;
		return (
			<>
				<div className="about-me portfolio">
					<h2
						data-name="portfolio-title"
						className="about-title portfolio--annimation portfolio-title"
					>
						Portfolio
					</h2>
					<p
						data-name="portfolio-text"
						className="about-text portfolio--annimation  portfolio-text"
					>
						Тут собраны работы, которые разрабатывал за время своего обучения и
						практики в GO IT. Это всего часть из них, а некоторые выполнены в
						командной работе с колегами по учебе. Часть работ выполнены только
						на HTML и CSS, ьез оживления с помощью JS.
					</p>
				</div>
				<div className="skills-wrapper portfolio">
					<div className="portfolio-info">
						<SliderPreview itemId={itemId} />
						<div className="wrapper-btn portfolio--position">
							<button
								onClick={this.setPreviousItemId}
								data-action="previous"
								className="btn-slider__skills portfolio-btn"
							>
								<svg className="social-item__ico" width="1vw" height="2vh">
									<use href={`${svg}#icoback`} alt="Viber"></use>
								</svg>
							</button>
							<button
								onClick={this.setNextItemId}
								data-action="next"
								className="btn-slider__skills portfolio-btn"
							>
								<svg className="social-item__ico" width="1vw" height="2vh">
									<use href={`${svg}#iconext`} alt="Viber"></use>
								</svg>
							</button>
						</div>
					</div>
					<div className="portfolio-list__wrapper">
						<SliderPreviewList
							setItemId={this.setItemId}
							sliderImg={sliderImg}
						/>
					</div>
				</div>
			</>
		);
	}
}
