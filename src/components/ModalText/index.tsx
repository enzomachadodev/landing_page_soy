import { useContext } from "react";
import { GlobalContext } from "../../context";
import { StyledModalText } from "./style";
import { CgClose } from "react-icons/cg";

const ModalText = () => {
	const { setTextModal, textModal, currentProcedure } = useContext(GlobalContext);

	return (
		<StyledModalText isVisible={textModal}>
			<div className="modalBox">
				<button onClick={() => setTextModal(false)}>
					<CgClose />
				</button>
				<h2 className="modalTitle">{currentProcedure?.name}</h2>
				<div className="textBox">
					{currentProcedure?.description.map((e, index) => (
						<p key={index}>{e}</p>
					))}
				</div>
			</div>
		</StyledModalText>
	);
};

export default ModalText;
