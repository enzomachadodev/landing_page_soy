import { Container } from "../Container/style";

import { StyledContact } from "./style";

const ContactSection = () => {
	return (
		<StyledContact id="contato">
			<Container>
				<div className="sectionTitleBox">
					<span data-aos="fade-right">estamos esperando por você</span>
					<h2 data-aos="fade-right">Contato</h2>
				</div>
				<span className="sectionText">
					Fique à vontade para entrar em contato em caso de dúvidas ou para obter mais
					informações sobre nossos serviços
				</span>
				<a
					href="https://wa.me/5521996951789"
					className="queryBtn"
					target="_blank"
					rel="noreferrer"
				>
					quero agendar uma consulta
				</a>
			</Container>
		</StyledContact>
	);
};

export default ContactSection;
