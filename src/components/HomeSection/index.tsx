import { StyledHome } from "./style";

const profilepic = require("../../assets/images/profilepic.png");

const HomeSection = () => {
	return (
		<StyledHome id="inicio">
			<div className="bannerContainer">
				<div className="textBox">
					<h1 data-aos="fade-right">
						Te ajudo a realçar a beleza que já existe em você!
					</h1>
					<h2 data-aos="fade-right">
						Nossos protocolos de tratamento são feitos de forma individualizada. Afinal,
						você é único(a)!
					</h2>
					<a data-aos="fade-right" href="#diferenciais" id="diferenciais">
						Saiba mais
					</a>
				</div>

				<img src={profilepic} alt="" />
			</div>
		</StyledHome>
	);
};

export default HomeSection;
