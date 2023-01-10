import { StyledProcedures } from "./style";
import { proceduresData } from "../../data";
import Card from "../ProCards/index";
import { Container } from "../Container/style";

const ProduceduresSection = () => {
	return (
		<StyledProcedures id="procedimentos">
			<Container>
				<div className="sectionTitleBox">
					<span data-aos="fade-right">para realçar a sua beleza</span>
					<h2 data-aos="fade-right">Procedimentos</h2>
				</div>
				<ul>{proceduresData.map((e) => Card(e))}</ul>
			</Container>
		</StyledProcedures>
	);
};

export default ProduceduresSection;
