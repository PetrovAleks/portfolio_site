import React, { Component } from "react";
import Nav from "../nav";
import Sections from "../pages/pages";

import ReactFullpage from "@fullpage/react-fullpage";

import "./App.css";

export default class App extends Component {
	state = {
		sectionId: ["1", "2", "3", "4"],
		render: false,
	};
	refs = null;
	componentDidMount() {
		this.refs = {
			nav: document.querySelectorAll(".header-nav__anchor"),
			heroAnimations: document.querySelectorAll(".title-animation"),
			footerAnimation: document.querySelector(".footer"),
			skillsAnimation: document.querySelectorAll(".skills-animation"),
			aboutAnimation: document.querySelectorAll(".about-animation"),
			btnAboutAnimation: document.querySelectorAll(".btn-about-animation"),
			portfolioAnnimation: document.querySelectorAll(".portfolio--annimation"),
			portfolioItemAnimations: document.querySelectorAll(
				".portfolio-item--animations"
			),
			portfolioBtnAnimation: document.querySelectorAll(".portfolio-btn"),
			contactsAnimation: document.querySelectorAll(".contacts-animation"),
			contactsInfo: document.querySelector(".contacts-info"),
			contactFooter: document.querySelector(".contacts-footer"),
		};
		this.setState({
			render: true,
		});
	}

	addAnimation(id) {
		const {
			heroAnimations,
			footerAnimation,
			skillsAnimation,
			btnAboutAnimation,
			aboutAnimation,
			portfolioAnnimation,
			portfolioItemAnimations,
			portfolioBtnAnimation,
			contactsAnimation,
			contactsInfo,
			contactFooter,
		} = this.refs;
		footerAnimation.classList.add("footer--animation-revers");

		heroAnimations.forEach((el) => {
			if (el.dataset.name === "inscription-title") {
				el.classList.add("inscription-title--animation-revers");
			}
			if (el.dataset.name === "title-slider1") {
				el.classList.add("title--annimations-revers");
			}
			if (el.dataset.name === "sign-title") {
				el.classList.add("sign-title--animation-revers");
			}
		});

		skillsAnimation.forEach((el) => {
			el.classList.add("wrapper-about--animation");
		});
		btnAboutAnimation.forEach((el) => {
			el.classList.add("btn--animation");
		});
		portfolioBtnAnimation.forEach((el) => {
			el.classList.add("btn--animation");
		});

		aboutAnimation.forEach((el) => {
			if (el.dataset.name === "about-title") {
				el.classList.add("about-title--animation");
			}
			if (el.dataset.name === "about-text") {
				el.classList.add("about-text--animation");
			}
		});

		portfolioAnnimation.forEach((el) => {
			if (el.dataset.name === "portfolio-title") {
				el.classList.add("about-title--animation");
			}
			if (el.dataset.name === "portfolio-text") {
				el.classList.add("about-text--animation");
			}
		});

		portfolioItemAnimations.forEach((el) => {
			el.classList.add("wrapper-about--animation");
		});

		contactsAnimation.forEach((el) => {
			if (el.dataset.name === "contacts-title") {
				el.classList.add("about-title--animation");
			}
			if (el.dataset.name === "contacts-text") {
				el.classList.add("about-text--animation");
			}
		});
		contactsInfo.classList.add("wrapper-about--animation");

		if (id === 1) {
			skillsAnimation.forEach((el) => {
				el.classList.add("wrapper-about--animation-reverse");
			});
			btnAboutAnimation.forEach((el) => {
				el.classList.add("btn--animation-reverse");
			});

			aboutAnimation.forEach((el) => {
				el.classList.add("about-animation-reverse");
			});
		}

		if (id === 2) {
			portfolioAnnimation.forEach((el) => {
				el.classList.add("about-animation-reverse");
			});

			portfolioItemAnimations.forEach((el) => {
				el.classList.add("wrapper-about--animation-reverse");
				el.classList.remove("selected-item");
			});
			portfolioBtnAnimation.forEach((el) => {
				el.classList.add("btn--animation-reverse");
			});
		}

		if (id === 3) {
			contactsAnimation.forEach((el) => {
				el.classList.add("about-animation-reverse");
			});
			contactsInfo.classList.add("wrapper-about--animation-reverse");
			contactFooter.classList.add("footer--animation-revers");
		}
	}

	removeAnimation(id) {
		const { heroAnimations, footerAnimation } = this.refs;
		setTimeout((el) => {
			if (id > 0) {
				footerAnimation.classList.remove("footer--animation-revers");
				heroAnimations.forEach((el) => {
					if (el.dataset.name === "inscription-title") {
						el.classList.remove("inscription-title--animation-revers");
					}
					if (el.dataset.name === "title-slider1") {
						el.classList.remove("title--annimations-revers");
					}
					if (el.dataset.name === "sign-title") {
						el.classList.remove("sign-title--animation-revers");
					}
				});
			}
		}, 800);
	}

	setActiveAnchorMenu(id) {
		if (this.state.render) {
			this.refs.nav.forEach((item) => {
				item.classList.remove("active");
				const anchorId = item.dataset.id;
				console.log(anchorId);

				if (id + 1 == anchorId) {
					return item.classList.add("active");
				}
			});
		}
	}

	onLeave = (origin, destination, direction) => {
		this.addAnimation(origin.index);
		this.removeAnimation(origin.index);
	};
	afterLoad = (origin, destination, direction) => {
		const {
			skillsAnimation,
			btnAboutAnimation,
			aboutAnimation,
			portfolioAnnimation,
			portfolioItemAnimations,
			portfolioBtnAnimation,
			contactsAnimation,
			contactsInfo,
			contactFooter,
		} = this.refs;

		if (this.state.render) {
			if (destination.index !== 1) {
				skillsAnimation.forEach((el) => {
					el.classList.remove(
						"wrapper-about--animation-reverse",
						"wrapper-about--animation"
					);
				});

				btnAboutAnimation.forEach((el) => {
					el.classList.remove("btn--animation-reverse", "btn--animation");
				});

				aboutAnimation.forEach((el) => {
					el.classList.remove("about-animation-reverse");
					if (el.dataset.name === "about-title") {
						el.classList.remove("about-title--animation");
					}
					if (el.dataset.name === "about-text") {
						el.classList.remove("about-text--animation");
					}
				});
			}
			if (destination.index !== 2) {
				portfolioAnnimation.forEach((el) => {
					el.classList.remove("about-animation-reverse");
					if (el.dataset.name === "portfolio-title") {
						el.classList.remove("about-title--animation");
					}
					if (el.dataset.name === "portfolio-text") {
						el.classList.remove("about-text--animation");
					}
				});
				portfolioItemAnimations.forEach((el) => {
					el.classList.remove("wrapper-about--animation");
					el.classList.remove("wrapper-about--animation-reverse");
					el.classList.remove("selected-item");
				});

				portfolioBtnAnimation.forEach((el) => {
					el.classList.remove("btn--animation-reverse", "btn--animation");
				});
			}

			if (destination.index !== 3) {
				contactsAnimation.forEach((el) => {
					el.classList.remove(
						"about-animation-reverse-reverse",
						"about-animation-reverse"
					);
					if (el.dataset.name === "contacts-title") {
						el.classList.remove("about-title--animation");
					}
					if (el.dataset.name === "contacts-text") {
						el.classList.remove("about-text--animation");
					}
				});

				contactsInfo.classList.remove(
					"wrapper-about--animation-reverse",
					"wrapper-about--animation"
				);
				contactFooter.classList.remove("footer--animation-revers");
			}
		}

		this.setActiveAnchorMenu(destination.index);
	};

	render() {
		const { sectionId } = this.state;

		const section = (
			<ReactFullpage
				autoScrolling={true}
				recordHistory={false}
				scrollingSpeed={2000}
				cards={true}
				cardsOptions={true}
				anchors={["1", "2", "3", "4"]}
				slidesNavigation={true}
				fadingEffect={true}
				onLeave={this.onLeave}
				afterLoad={this.afterLoad}
				animateAnchor={true}
				menu={"#myMenu"}
				render={({ fullpageApi }) => {
					return (
						<ReactFullpage.Wrapper>
							<div id="fullpage">
								<Sections sectionId={sectionId} />
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		);

		return (
			<>
				<Nav />
				{section}
			</>
		);
	}
}
