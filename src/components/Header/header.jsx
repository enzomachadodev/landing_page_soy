import { StyledHeader } from "./style";

const Header = () => {
	return (
		<StyledHeader>
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

			<button>menu</button>
		</StyledHeader>
	);
};

export default Header;
