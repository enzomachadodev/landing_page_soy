import { StyledCard } from "./style";
import { Carousel } from "react-bootstrap";
import { IProcedureObj } from "../../data";

const Card = (proceObj: IProcedureObj, index: number) => {
	return (
		<StyledCard>
			<Carousel>
				{proceObj.img.map((img, index) => (
					<Carousel.Item interval={3000} key={index}>
						<img className="slideImg" src={img} alt="" />
					</Carousel.Item>
				))}
			</Carousel>
			<div className="cardInfo">
				<h3>bioestimulador de colageno</h3>
			</div>
			<div className="btnBox">
				<button>Fotos</button>
				<button>Sobre</button>
			</div>
		</StyledCard>
	);
};

export default Card;
