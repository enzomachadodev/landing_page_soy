import { StyledProcedures } from "./style";
import { proceduresData } from "../../data";
import Card from "./Cards/cards";
import { Container } from "../Container/style";

const ProduceduresSection = () => {
	return (
		<StyledProcedures id="procedimentos">
			<Container>
				<ul>{proceduresData.map((e) => Card(e))}</ul>
			</Container>
		</StyledProcedures>
	);
};

export default ProduceduresSection;
