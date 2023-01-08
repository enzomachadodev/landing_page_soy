import styled from "styled-components";

export const StyledCard = styled.li`
	width: 45%;
	height: 600px;
	margin-bottom: 4%;
	position: relative;
	overflow: hidden;

	@media (max-width: 768px) {
		width: 100%;
		height: 500px;
	}

	/* @media (max-width: 1050px) {
		max-width: 400px;
	}

	@media (max-width: 870px) {
		max-width: 350px;
	} */

	.title {
		width: 100%;
		height: 100%;
		transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		position: relative;
		z-index: 1;

		img {
			height: 100%;
			filter: brightness(0.6);
			transition: 3s;
		}

		img:hover {
			scale: 1.1;
		}
	}

	.titleBox {
		margin: 1rem;
		position: absolute;
		z-index: 2;

		button {
			position: relative;
			color: white;
			background: none;
			border: none;
			transition: 0.5s;
		}

		button::after {
			content: "";
			position: absolute;
			width: 100%;
			transform: scaleX(0);
			height: 1.2px;
			bottom: 0;
			left: 0;
			background-color: var(--white);
			transform-origin: bottom right;
			transition: transform 0.3s ease-out;
		}

		button:hover::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}

	.description {
		position: absolute;
		z-index: 4;
		inset: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 1rem;
		top: ${({ open }) => (open ? "0" : "100%")};
		transition: all 0.8s cubic-bezier(0.6, 0.4, 0, 1);

		background: rgba(0, 0, 0, 0.7);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	.descriptionContainer {
		padding-left: 8px;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1rem;

		button {
			margin: 10px auto;
			font-size: 1.5rem;
		}

		&&::-webkit-scrollbar {
			width: 12px; /* width of the entire scrollbar */
		}

		&&::-webkit-scrollbar-track {
			background: orange; /* color of the tracking area */
		}

		&&::-webkit-scrollbar-thumb {
			background-color: blue; /* color of the scroll thumb */
			border-radius: 20px; /* roundness of the scroll thumb */
			border: 3px solid orange; /* creates padding around scroll thumb */
		}
	}

	.descriptionContainer::-webkit-scrollbar {
		width: 8px; /* width of the entire scrollbar */
	}

	.descriptionContainer::-webkit-scrollbar-track {
		background: transparent;
	}

	.descriptionContainer::-webkit-scrollbar-thumb {
		background-color: var(--gray-1); /* color of the scroll thumb */
		border-radius: 20px; /* roundness of the scroll thumb */
	}
`;
