import { useState } from "react";
import { StyledHeader, StyledBurger, StyledNav } from "./style";
const logo = require("../../assets/images/logo.png");

const Header = () => {
	const [open, setOpen] = useState(false);
	const [scroll, setScroll] = useState(false);

	const menuOptions = [
		{
			name: "Início",
			href: "#inicio",
		},
		{
			name: "Procedimentos",
			href: "#procedimentos",
		},
		{
			name: "Depoimentos",
			href: "#depoimentos",
		},
		{
			name: "Contato",
			href: "#contato",
		},
	];

	const handleScroll = () => {
		window.scrollY >= 71 ? setScroll(true) : setScroll(false);
	};

	window.addEventListener("scroll", handleScroll, true);

	window.addEventListener("scroll", (_) => handleScroll, true);

	return (
		<>
			<StyledHeader scroll={scroll} open={open}>
				<div className="logoBox">
					<img src={logo} alt="" />
				</div>

				<ul className="fixedNav">
					{menuOptions.map((o) => (
						<li>
							<a className="fixedOptions" href={o.href}>
								{o.name}
							</a>
						</li>
					))}
				</ul>
				<StyledBurger scroll={scroll} open={open} onClick={() => setOpen(!open)}>
					<div />
					<div />
					<div />
				</StyledBurger>
			</StyledHeader>
			<StyledNav scroll={scroll} open={open}>
				{menuOptions.map((o) => (
					<li>
						<a href={o.href} onClick={() => setOpen(!open)}>
							{o.name}
						</a>
					</li>
				))}
			</StyledNav>
		</>
	);
};

export default Header;
