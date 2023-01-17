import { StyledTextModal } from "./style";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TextModal = (props) => {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Title</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h3>testeteste</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos harum
					illum perspiciatis distinctio ad nulla, rem illo corporis autem minus a velit
					facere molestias culpa dicta aut hic delectus?
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default TextModal;
