import { StyledProcedures } from "./style";
import { proceduresData } from "../../data";
import Card from "../ProCards/index";
import { Container } from "../Container/style";

const ProduceduresSection = () => {
	return (
		<StyledProcedures id="procedimentos">
			<Container>
				<span className="sectionSubTitle" data-aos="fade-right">
					para realçar a sua beleza
				</span>
				<h2 className="sectionTitle" data-aos="fade-right">
					Procedimentos
				</h2>
				<ul>{proceduresData.map((e) => Card(e))}</ul>
			</Container>
		</StyledProcedures>
	);
};

export default ProduceduresSection;
