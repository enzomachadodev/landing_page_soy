import { StyledHome } from "./style";

const profilepic = require("../../assets/images/profilepic.png");

const HomeSection = () => {
	return (
		<StyledHome id="inicio">
			<div className="bannerContainer">
				<h1 data-aos="fade-right">Sua beleza é única!</h1>
				<img src={profilepic} alt="" />
			</div>
		</StyledHome>
	);
};

export default HomeSection;
