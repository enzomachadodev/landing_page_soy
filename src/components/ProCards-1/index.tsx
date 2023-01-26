import { StyledCard } from "./style";
import { Carousel } from "react-bootstrap";
import { IProcedureObj } from "../../data";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import Slider from "../ImageSlider";

const Card = (proceObj: IProcedureObj, index: number) => {
	const { setCurrentProcedure, setSliderModal, setTextModal, textModal } =
		useContext(GlobalContext);

	const intervals = [8000, 7000, 6000];

	return (
		<StyledCard key={index}>
			<div className="carousel">
				<Slider
					props={proceObj.img}
					time={intervals[Math.floor(Math.random() * intervals.length)]}
				/>
			</div>
			<div className="cardInfo">
				<h3>{proceObj.name}</h3>
			</div>
			<div className="btnBox">
				<button
					onClick={() => {
						setCurrentProcedure(proceObj);
						setSliderModal(true);
					}}
				>
					Fotos
				</button>
				<button
					onClick={() => {
						setCurrentProcedure(proceObj);
						setTextModal(true);
						console.log(textModal);
					}}
				>
					Sobre
				</button>
			</div>
		</StyledCard>
	);
};

export default Card;
