import { useState } from "react";
import { StyledHeader, StyledBurger, StyledNav } from "./style";
import logo from "../../assets/images/logo.png";

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
			<StyledHeader scroll={scroll}>
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
				<StyledBurger open={open} onClick={() => setOpen(!open)}>
					<div />
					<div />
					<div />
				</StyledBurger>
			</StyledHeader>
			<StyledNav open={open}>
				{menuOptions.map((o) => (
					<li>
						<button href={o.href} onClick={() => setOpen(!open)}>
							{o.name}
						</button>
					</li>
				))}
			</StyledNav>
		</>
	);
};

export default Header;
