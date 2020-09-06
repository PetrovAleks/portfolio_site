import React from "react";
import img from "../images/svg/social.svg";
const FooterIcons = () => {
	return (
		<ul className="social-list list-style ">
			<li className="social-item">
				<a
					className="social-icon__link"
					target="_blank"
					href="https://github.com/PetrovAleks"
				>
					<svg className="social-item__ico" width="3vw" height="3vh">
						<use href={`${img}#icologo`} alt="GitHab"></use>
					</svg>
				</a>
			</li>
			<li className="social-item">
				<a
					className="social-icon__link"
					target="_blank"
					href="https://join.skype.com/invite/oYx5U3UwZXHM"
				>
					<svg className="social-item__ico" width="3vw" height="3vh">
						<use href={`${img}#icoskype`} alt="Skype"></use>
					</svg>
				</a>
			</li>
			<li className="social-item">
				<a
					className="social-icon__link"
					target="_blank"
					href="https://viber.click/%2B30990900984"
				>
					<svg className="social-item__ico" width="3vw" height="3vh">
						<use href={`${img}#icoviber`} alt="Viber"></use>
					</svg>
				</a>
			</li>
		</ul>
	);
};

export default FooterIcons;
