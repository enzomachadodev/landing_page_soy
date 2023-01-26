import { Container } from "../Container/style";
import { StyledPreContent } from "./style";

const PreContent = () => {
	return (
		<StyledPreContent>
			<div className="textBox">
				<h2 className="">
					Nossos protocolos de tratamento são feitos de forma individualizada. Afinal,
					você é único(a)!
				</h2>
			</div>
			<div className="difeBox">
				<h3 className="title">DENTRE OS NOSSOS DIFERENCIAIS:</h3>
				<h3 className="name">CONCEITO IN-OUT</h3>
				<span className="subtitle">(Tratar de dentro para fora e de fora para dentro)</span>
				<span className="text">
					Não há dúvidas que um organismo saudável irá responder melhor aos nossos
					tratamentos. Sendo assim, vamos além! Orientações de hábitos saudáveis e
					prescrições de nutracêuticos fazem parte da nossa consulta!
				</span>
			</div>
		</StyledPreContent>
	);
};

export default PreContent;
