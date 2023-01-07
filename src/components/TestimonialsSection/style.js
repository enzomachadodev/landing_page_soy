import styled from "styled-components";

export const StyledTestimonial = styled.div`
	width: 100%;
	height: 800px;
	border: 1px solid red;
	background-color: var(--gray-3);
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 3rem;

	.carousel {
		height: 100%;
		justify-content: space-around;
	}

	.card {
		border: 1px solid red;
		height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.innerCard {
		max-width: 400px;
	}

	.carousel .control-dots .dot {
		box-shadow: none;
		background-color: var(--black);
		width: 20px;
		height: 20px;
	}
`;
