import "./style.css";
import Modal from "react-bootstrap/Modal";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context";

interface ISliderModalProps {
	show: boolean;
	onHide(): void;
}

const SliderModal = (props: ISliderModalProps) => {
	const { currentProcedure } = useContext(GlobalContext);
	const [current, setCurrent] = useState(0);

	const length = currentProcedure?.img.length;

	const nextSlide = () => {
		setCurrent(current === length! - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length! - 1 : current - 1);
	};

	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{currentProcedure?.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{length! > 1 ? (
					currentProcedure?.img.map((e, index) => (
						<div className={index === current ? "slide active" : "slide"} key={index}>
							{index === current && (
								<img src={e} alt="foto do procedimento" className="image" />
							)}
						</div>
					))
				) : (
					<div className="slide active">
						<img src={currentProcedure?.img[0]} alt="" className="image" />
					</div>
				)}
			</Modal.Body>
			<Modal.Footer>
				{length! > 1 ? (
					<div className="btnBox">
						<button className="moveBtn" onClick={() => prevSlide()}>
							Anterior
						</button>
						<button className="moveBtn" onClick={() => nextSlide()}>
							Próximo
						</button>
					</div>
				) : (
					<div />
				)}
			</Modal.Footer>
		</Modal>
	);
};

export default SliderModal;
