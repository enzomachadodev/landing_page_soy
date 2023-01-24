import { StyledFooter } from "./style";

import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { SiTiktok } from "react-icons/si";

const FooterSection = () => {
	return (
		<StyledFooter>
			<div className="footerContainer">
				<div className="footerLogo">
					<img src="logoredonda.PNG" alt="" />
				</div>
				<div className="footerLinks">
					<ul>
						<li>
							<a href="">Fale Conosco</a>
						</li>
						<li>
							<a href="">E-mail</a>
						</li>
						<li>
							<a href="">Instagram</a>
						</li>
						<li>
							<a href="">TikTok</a>
						</li>
					</ul>
				</div>
				<div className="footerEndrerecos">
					<div className="footerSocial">
						<a href="">
							<ImWhatsapp />
						</a>
						<a href="">
							<GrInstagram />
						</a>
						<a href="">
							<SiTiktok />
						</a>
					</div>

					<p>Quartier Ipanema, R. Visc. de Pirajá, 414 -Ipanema, Rio de Janeiro - RJ</p>
					<p>
						Absolutto Business Towers, Av.das Américas, 19005 -Recreio dos Bandeirantes,
						Rio de Janeiro - RJ
					</p>
					<p>
						Lanna Shopping Avenida Francisco Vieira Martins, 595 -Palmeiras, Ponte Nova
						- MG
					</p>
				</div>
			</div>

			<div className="rights">
				<span>©2023 Dra. Soyrana Takenawa. All rights reserved.</span>
			</div>
		</StyledFooter>
	);
};

export default FooterSection;
