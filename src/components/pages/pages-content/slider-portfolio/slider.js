import React, { Component } from "react";
import { dataImg, dataPreview } from "../slider-portfolio/data-slider";

class SliderPreview extends Component {
	render() {
		const { itemId } = this.props;
		const { name, img, text, code, site } = dataPreview[itemId];

		return (
			<>
				<div className="portfolio-img__wrapper portfolio-item__preview  portfolio-item--animations  ">
					<div className="img">
						<img src={img} width="100%" className="portfolio-info__img"></img>
					</div>

					<p className="img-inscription">
						сайт :
						<a
							className="img-inscription__link"
							target="_blank"
							href={`${site}`}
						>
							LINK
						</a>
					</p>
					<p className="img-inscription">
						код :
						<a
							className="img-inscription__link"
							target="_blank"
							href={`${code}`}
						>
							LINK
						</a>
					</p>
				</div>

				<div className="portfolio-info__wrapper portfolio-item__preview portfolio-item--animations  ">
					<h3 className="portfolio-info__title">{name}</h3>
					<p className="portfolio-info__text">{text}</p>
				</div>
			</>
		);
	}
}

class SliderPreviewList extends Component {
	render() {
		const { id } = dataPreview;
		const { setItemId, sliderImg } = this.props;

		return (
			<ul className="portfolio-list list-style portfolio-item--animations">
				<li
					onClick={(e) => setItemId(e)}
					data-id={sliderImg}
					className="portfolio-item selected-item"
				>
					<img
						data-id={sliderImg}
						src={dataImg[sliderImg]}
						width="25%"
						className="portfolio-item__img"
					></img>
				</li>
				<li
					onClick={(e) => setItemId(e)}
					data-id={sliderImg + 1}
					className="portfolio-item selected-item"
				>
					<img
						src={dataImg[sliderImg + 1]}
						width="25%"
						data-id={sliderImg + 1}
						className="portfolio-item__img"
					></img>
				</li>
			</ul>
		);
	}
}

export { SliderPreviewList, SliderPreview };
