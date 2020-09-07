import React from "react";
import FooterIcons from "../footer/footer";

import "./contacts.css";

const Contacts = () => {
	return (
		<>
			<div className="contacts-form contacts-form__info ">
				<h2
					data-name="contacts-title"
					className=" title-slider1 contacts-animation contacts-title"
				>
					Contacts
				</h2>
				<p
					data-name="contacts-text"
					className="contacts-text__wrapper contacts-animation"
				>
					На последок расскажу, что я пунктуальный и целеустремленный человек,
					который все делает в срок и качественно. Свою работу люблю и ценю.
					Всегда рад выслушать ваши предложения. Звоните в любое время !
				</p>
			</div>
			<div className="contacts-form contacts-info">
				<p className="contacts-text__wrapper">
					<b>Address</b>
					<br />
					Покровск, Донецкая область <br />
					<b>Phone</b> <br />
					+380(99)090 09 84
					<br />
					<b>E-mail</b>
					<br />
					rpm10b@gmail.com
				</p>
			</div>

			<div className="footer contacts-footer">
				<FooterIcons />
				<div className="scroll-wrapper scroll-wrapper--up-scroll ">
					<span className="scroll up-scroll">scroll</span>
				</div>
			</div>
		</>
	);
};

export default Contacts;
