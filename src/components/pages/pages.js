import React from "react";
import Hero from "../pages/pages-content/helloy/hero";
import WhoAmI from "../pages/pages-content/who-am-I/who-am-I";
import WhaIcanDo from "../pages/pages-content/what-I-can-do/what-I-can-do";
import Contacts from "../pages/pages-content/contacts/contacts";
import "./pages.css";

const Sections = (props) => {
	const { sectionId } = props;

	const content = [<Hero />, <WhoAmI />, <WhaIcanDo />, <Contacts />];

	const sectionContent = sectionId.map((id) => {
		const classActive = `section hero fullscreen` + id;

		let valContent;
		content.map((el) => {
			if (Number(id - 1) === content.indexOf(el)) {
				return (valContent = el);
			}
		});
		return (
			<section key={id} data-anchor={id} className={classActive}>
				<div className={`  wrapper-hero container  content-wrapper${id} `}>
					{valContent}
				</div>
			</section>
		);
	});

	return <>{sectionContent}</>;
};

export default Sections;
