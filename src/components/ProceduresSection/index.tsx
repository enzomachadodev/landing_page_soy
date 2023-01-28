import { StyledProcedures } from "./style";
import { proceduresData } from "../../data";
import Card from "../ProCards-1/index";
import { Container } from "../Container/style";

const ProduceduresSection = () => {
	return (
		<StyledProcedures id="procedimentos">
			<Container>
				<div className="sectionTitleBox">
					<span data-aos="fade-right">para realçar a sua beleza</span>
					<h2 data-aos="fade-right">Procedimentos</h2>
				</div>
				<a
					href="https://wa.me/5521996951789"
					className="queryBtn"
					target="_blank"
					rel="noreferrer"
				>
					quero agendar uma consulta
				</a>
				<ul>{proceduresData.map((e, index) => Card(e, index))}</ul>
			</Container>
		</StyledProcedures>
	);
};

export default ProduceduresSection;
