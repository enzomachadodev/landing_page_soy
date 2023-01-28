import styled from "styled-components";

export const StyledTestimonial = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 75px;
	padding-bottom: 75px;
	background-color: #f7ecdb;

	.cardSlider {
		height: 500px;
		width: 100%;
		max-width: 500px;
		margin: 50px auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding: 1.2rem;
		border: 1px solid var(--white);
		border-radius: 8px;

		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(8.5px);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

		@media (max-width: 500px) {
			box-shadow: unset;
		}
	}

	.carousel-indicators button {
		background-color: var(--pink);
	}

	.carousel-control-next,
	.carousel-control-prev {
		display: none;
	}

	.clientInfo {
		margin: 0 auto;
		margin-bottom: auto;
		width: 100%;
		max-width: 400px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 20px;
		overflow: hidden;

		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
	}

	.testimonialsName {
		font-family: var(--font-secundary);
		color: var(--brown-2);
		text-transform: uppercase;
		font-weight: 600;
		font-size: 1.5rem;
	}

	.testimonialsText {
		height: 75%;
		width: 100%;
		text-align: center;
		font-size: 1.1rem;
		font-weight: 400;
		color: var(--gray-6);
		overflow-x: hidden;
		overflow-y: scroll;
	}

	.testimonialsText::-webkit-scrollbar {
		width: 5px; /* width of the entire scrollbar */
	}

	.testimonialsText::-webkit-scrollbar-track {
		background: transparent; /* color of the tracking area */
	}

	.testimonialsText::-webkit-scrollbar-thumb {
		background-color: var(--gray-2); /* color of the scroll thumb */
		border-radius: 20px; /* roundness of the scroll thumb */
	}
`;
