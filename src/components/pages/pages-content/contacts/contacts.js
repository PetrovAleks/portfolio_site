import React from "react";
import FooterIcons from "../footer/footer";

import "./contacts.css";

const Contacts = () => {
	return (
		<>
			<div className="contacts-form">
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
					Прародителем текста-рыбы является известный "Lorem Ipsum" – латинский
					текст, ноги которого растут аж из 45 года до нашей эры. Сервисов по
					созданию случайного текста на основе Lorem Ipsum великое множество,
					однако все они имеют один существенный недостаток: их "рыба текст"
					подходит лишь для англоязычных ресурсов/проектов. Мы же, фактически,
					предлагаем Lore
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
