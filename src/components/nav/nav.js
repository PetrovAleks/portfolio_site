import React, { Component } from "react";
import "./nav.css";

export default class Nav extends Component {
	render() {
		return (
			<header className="header  ">
				<nav className="header-nav">
					<h1 className="logo">
						P
						<br />
						ro
					</h1>
					<ul className="header-nav__list list-style">
						<li data-menuanchor="1" className="header-nav__item">
							<a className="header-nav__anchor active" href="#1" data-id="1">
								Привет
							</a>
						</li>
						<li data-menuanchor="2" className="header-nav__item">
							<a className="header-nav__anchor" href="#2" data-id="2">
								Кто я
							</a>
						</li>
						<li data-menuanchor="3" className="header-nav__item">
							<a className="header-nav__anchor" href="#3" data-id="3">
								Вот мои работы
							</a>
						</li>
						<li data-menuanchor="4" className="header-nav__item">
							<a className="header-nav__anchor" href="#4" data-id="4">
								Пообщаемся?
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
