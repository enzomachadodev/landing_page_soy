import styled from "styled-components";

export const StyledSlider = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	.slide {
		animation: fadeIn 0.5s;
	}

	.slide.active {
		animation: fadeIn 0.5s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0.7;
		}
		100% {
			opacity: 1;
		}
	}

	img {
		width: 100%;
		height: 100%;
		animation: fadeIn 0.5s;
	}
`;
