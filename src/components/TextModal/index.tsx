import "./style.css";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../context";

interface ITextModalProps {
	show: boolean;
	onHide(): void;
}

const TextModal = (props: ITextModalProps) => {
	const { currentProcedure } = useContext(GlobalContext);
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{currentProcedure?.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{currentProcedure?.description.map((e, index) => (
					<p key={index}>{e}</p>
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

export default TextModal;
