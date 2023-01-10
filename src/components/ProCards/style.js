import styled from "styled-components";

export const StyledCard = styled.li`
	width: 22%;
	height: 290px;
	margin-bottom: 4%;
	position: relative;
	overflow: hidden;
	border: 1px solid red;
	border-radius: 20px;

	@media (max-width: 1000px) {
		width: 30%;
	}

	@media (max-width: 768px) {
		width: 45%;
		max-width: 250px;
		height: 270px;
	}

	@media (max-width: 480px) {
		max-height: 180px;
		max-width: 180px;
	}

	img {
		width: 100%;
		height: 100%;
	}
`;
