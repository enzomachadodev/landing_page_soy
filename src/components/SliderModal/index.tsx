import "./style.css";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../context";

interface ISliderModalProps {
	show: boolean;
	onHide(): void;
}

const SliderModal = (props: ISliderModalProps) => {
	const { currentProcedure } = useContext(GlobalContext);
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{currentProcedure?.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{currentProcedure?.img.map((e, index) => (
					<img src={e} key={index} alt="" />
				))}
			</Modal.Body>
			<Modal.Footer>
				<button onClick={props.onHide} className="closeBtn">
					Fechar
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default SliderModal;
