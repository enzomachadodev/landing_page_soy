import { Container } from "../Container/style";
import { StyledResults } from "./style";

const ResultsSection = () => {
	return (
		<StyledResults id="resultados">
			<Container>
				<span className="sectionSubTitle" data-aos="fade-right">
					antes e depois de nossos clientes
				</span>
				<h2 className="sectionTitle" data-aos="fade-right">
					Resultados
				</h2>
			</Container>
		</StyledResults>
	);
};

export default ResultsSection;
