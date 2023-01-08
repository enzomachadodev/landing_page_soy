import styled from "styled-components";
import back from ".././assets/images/stonebackground.jpg";

export const StyledMainPage = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-image: url(${back});
	background-attachment: fixed;
	background-size: cover;
`;
