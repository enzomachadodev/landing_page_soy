import { StyledFooter } from "./style";

const FooterSection = () => {
	return (
		<StyledFooter>
			<div className="container_footer">
				<div className="social_footer">
					<h4>REDES</h4>
					<ul>
						<li>
							<p>Instagram</p>
						</li>
						<li>
							<p>Facebook</p>
						</li>
						<li>
							<p>Whatsapp</p>
						</li>
					</ul>
				</div>
				<div className="contact_footer">
					<h4>CONTATO</h4>
					<p>R. Exemplo, 9999 - 202 - Exemplo, Rio de Janeiro/RJ</p>
					<p>R. Exemplo, 9999 - 202 - Exemplo, Ponte Nova/MG</p>
					<p>CNPJ 99.999.999/9999-99</p>
					<p>email@exemplo.com.br</p>
				</div>
			</div>

			<div className="rights">
				<span>©2023 Dra. Soyrana Takenawa. All rights reserved.</span>
			</div>
		</StyledFooter>
	);
};

export default FooterSection;
