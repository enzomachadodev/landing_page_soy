import { StyledAbout } from "./style";
import { Container } from "../Container/style";

const AboutSection = () => {
	return (
		<StyledAbout id="sobre">
			<Container>
				<span className="sectionSubTitle" data-aos="fade-right">
					algumas palavras sobre mim
				</span>
				<h2 className="sectionTitle" data-aos="fade-right">
					Sobre Mim
				</h2>
			</Container>
		</StyledAbout>
	);
};

export default AboutSection;
