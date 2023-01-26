import styled, { css } from "styled-components";

interface IStyledModalTextProps {
	isVisible: boolean;
}

export const StyledModalText = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 10000;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(20, 20, 20, 0.7);
	transition: 0.5s;
	overflow: hidden;
	overflow-y: hidden;

	.modalBox {
		width: 90%;
		max-width: 500px;
		min-height: 400px;
		max-height: 600px;
		border: 2px solid var(--pink);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0rem;
		background-color: var(--off-white);
		border-radius: 8px;

		transform: scale(0.7);
		transition: 0.7s;

		button {
			margin: 0 auto;
			width: fit-content;
			font-size: 2rem;
			background: none;
			border: none;
			color: var(--pink);
			transition: 0.5s;
		}

		button:hover {
			scale: 1.1;
		}
	}

	.modalTitle {
		font-family: var(--font-secundary);
		font-size: 2rem;
		width: 90%;
		text-align: center;
		margin: 0 auto;
		color: var(--dark-brown);
	}

	.textBox {
		width: 97%;
		height: 100%;
		margin: 0 auto;
		overflow-y: auto;

		padding: 0 1rem;

		p {
			width: fit-content;
			text-align: justify;
			font-size: 1.1rem;
			color: var(--dark-brown);
		}
	}

	.textBox::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	.textBox::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: var(--sand);
	}

	/* Handle */
	.textBox::-webkit-scrollbar-thumb {
		background: var(--pink);
		border-radius: 50px;
	}

	/* width */

	${({ isVisible }: IStyledModalTextProps) =>
		isVisible &&
		css`
			opacity: 1;
			pointer-events: auto;
			nav {
				transform: scale(1);
			}
		`}
`;
