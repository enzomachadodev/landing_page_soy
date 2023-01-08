import { Container } from "../Container/style";
import { StyledContact } from "./style";

const ContactSection = () => {
	return (
		<StyledContact id="contato">
			<Container>
				<span className="sectionSubTitle" data-aos="fade-right">
					estamos esperando por você
				</span>
				<h2 className="sectionTitle" data-aos="fade-right">
					Contato
				</h2>
			</Container>
		</StyledContact>
	);
};

export default ContactSection;
