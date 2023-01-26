import { StyledHome } from "./style";

const profilepic = require("../../assets/images/teste-3.png");

const HomeSection = () => {
	return (
		<StyledHome id="inicio">
			<div className="bannerContainer">
				<h1>Sua beleza é única!</h1>
				<img src={profilepic} alt="" />
			</div>
		</StyledHome>
	);
};

export default HomeSection;
