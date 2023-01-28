import { StyledWhatsBtn } from "./style";

const WhatsBtn = () => {
	const whatsLogo = require("../../assets/images/logo-whatsapp.png");
	return (
		<StyledWhatsBtn href="https://wa.me/5521996951789" target="_blank" rel="noreferrer">
			<img src={whatsLogo} alt="" />
		</StyledWhatsBtn>
	);
};

export default WhatsBtn;
