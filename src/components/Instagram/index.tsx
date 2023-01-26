import { StyledInstagram } from "./style";
const insta = require("../../assets/images/insta.png");

const Instagram = () => {
	return (
		<StyledInstagram>
			<div className="back" />
			<h2>Já conhece meu Instagram?</h2>
			<a
				href="https://www.instagram.com/_soyranatakenawa/"
				target="_blank"
				rel="noreferrer"
				className="instaBtn"
			>
				<div className="logoBox">
					<img src={insta} alt="" />
				</div>
				<span className="nameBox">@_soyranatakenawa</span>
			</a>
		</StyledInstagram>
	);
};

export default Instagram;
