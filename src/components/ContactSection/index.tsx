import { Container } from "../Container/style";
import Maps from "../Maps";
import { StyledContact } from "./style";
import { addresses } from "../../data";

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
				<a href="" className="queryBtn">
					quero agendar uma consulta
				</a>
				{addresses.map((e) => (
					<div className="address">
						<h2>
							{e.name === "ipanema"
								? "Ipanema - RJ"
								: e.name === "recreio"
								? "Recreio - RJ"
								: "Ponte Nova - MG"}
						</h2>
						<div className="divBox">
							<div className="mapBox">
								<Maps props={e.name} />
							</div>
							<div className="textBox">
								<span>Endereço:</span>
								<p>{e.address}</p>
							</div>
						</div>
					</div>
				))}
			</Container>
		</StyledContact>
	);
};

export default ContactSection;
