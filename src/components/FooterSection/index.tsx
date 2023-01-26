import { StyledFooter } from "./style";

import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { SiTiktok } from "react-icons/si";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
const selo = require("../../assets/images/selo.png");

const FooterSection = () => {
	return (
		<StyledFooter>
			<div className="footerContainer">
				<div className="footerLinks">
					<img src={selo} alt="" />
					<div className="linksBox">
						<h3>Contato:</h3>
						<a href="https://wa.me/5521996951789" target="_blank" rel="noreferrer">
							<BsFillTelephoneFill className="iconLogo" />
							(21) 99695 - 1789
						</a>
						<a href="https://wa.me/5521996951789" target="_blank" rel="noreferrer">
							<ImWhatsapp className="iconLogo" />
							Whatsapp
						</a>
						<a
							href="https://www.instagram.com/_soyranatakenawa/"
							target="_blank"
							rel="noreferrer"
						>
							<GrInstagram className="iconLogo" />
							Instagram
						</a>
						<a href="">
							<SiTiktok className="iconLogo" />
							TikTok
						</a>
					</div>
				</div>
				<div className="footerAddresses">
					<h3>Endereços:</h3>
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
				<span>
					©2023 Dra. Soyrana Takenawa. All rights reserved | Desenvolvido por Enzo Machado
				</span>
				<div className="rigthsLinks">
					<a
						href="https://www.linkedin.com/in/enzomachado01/"
						target="_blank"
						rel="noreferrer"
					>
						<BsLinkedin className="icon linkedin" />
					</a>
					<a href="https://github.com/m4chado" target="_blank" rel="noreferrer">
						<BsGithub className="icon github" />
					</a>
				</div>
			</div>
		</StyledFooter>
	);
};

export default FooterSection;
