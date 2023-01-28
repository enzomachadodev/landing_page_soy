import { StyledInstagram } from "./style";
import { GrInstagram } from "react-icons/gr";

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
					<GrInstagram className="igLogo" />
				</div>
				<span className="nameBox">@_soyranatakenawa</span>
			</a>
		</StyledInstagram>
	);
};

export default Instagram;
