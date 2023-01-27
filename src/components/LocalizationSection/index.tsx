import { Container } from "../Container/style";
import { StyledLocalization } from "./style";
import Maps from "../Maps";
import { addresses } from "../../data";

const FinalSection = () => {
	return (
		<StyledLocalization id="localization">
			<Container>
				<div className="sectionTitleBox">
					<span data-aos="fade-right">já sabe onde nos encontrar</span>
					<h2 data-aos="fade-right">Localização</h2>
				</div>
				{addresses.map((e, index) => (
					<div className="address" key={index}>
						<h2 data-aos="fade-right">
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
		</StyledLocalization>
	);
};

export default FinalSection;
