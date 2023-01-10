import styled from "styled-components";

export const StyledTestimonial = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 75px;
	background-attachment: fixed;

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
		border: 2px solid var(--pink);
		border-radius: 25px;
		/* border-radius: 40px;
		background-color: white;
		-webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.4);
		box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.4); */
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
