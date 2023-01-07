import { useState, useEffect } from "react";
import { StyledHeader, StyledBurger, StyledNav } from "./style";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		window.scrollY >= 71 ? setScroll(true) : setScroll(false);
	};

	window.addEventListener("scroll", handleScroll, true);

	window.addEventListener("scroll", (_) => handleScroll, true);

	return (
		<>
			<StyledHeader scroll={scroll}>
				<h1>Logo</h1>
				<ul>
					<li>
						<a href="#inicio">Início</a>
					</li>
					<li>
						<a href="#procedimentos">Procedimentos</a>
					</li>
					<li>
						<a href="#sobre">Sobre mim</a>
					</li>
					<li>
						<a href="#resultados">Resultados</a>
					</li>
					<li>
						<a href="#depoimentos">Depoimentos</a>
					</li>
					<li>
						<a href="#contato">Contato</a>
					</li>
				</ul>
				<StyledBurger open={open} onClick={() => setOpen(!open)}>
					<div />
					<div />
					<div />
				</StyledBurger>
			</StyledHeader>
			<StyledNav open={open}>
				<li>
					<a href="#inicio">Início</a>
				</li>
				<li>
					<a href="#procedimentos">Procedimentos</a>
				</li>
				<li>
					<a href="#sobre">Sobre mim</a>
				</li>
				<li>
					<a href="#resultados">Resultados</a>
				</li>
				<li>
					<a href="#depoimentos">Depoimentos</a>
				</li>
				<li>
					<a href="#contato">Contato</a>
				</li>
			</StyledNav>
		</>
	);
};

export default Header;
