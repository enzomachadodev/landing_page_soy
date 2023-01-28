import styled from "styled-components";

export const StyledPreContent = styled.div`
	width: 100%;
	background-color: var(--white);
	display: flex;
	flex-direction: column;
	align-items: center;

	.textBox {
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5rem;
		margin-top: 50px;

		h2 {
			text-align: center;
			width: 100%;
			color: var(--bege-3);

			@media (min-width: 1300px) {
				font-size: 1.7rem;
			}
		}
	}

	.difeBox {
		padding: 1rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		text-align: center;
		color: var(--brown);
		font-family: var(--font-secundary);
		font-size: 2rem;
	}

	.name {
		font-weight: 500;
		color: var(--dark-brown);
		margin-top: 2rem;
		font-size: 2rem;

		@media (max-width: 500px) {
			font-size: 1.6rem;
		}
	}

	.subtitle {
		text-align: center;
		color: var(--brown);
		font-size: 1.1rem;
	}

	.text {
		margin-top: 2rem;
		color: var(--brown);
		font-size: 1.5rem;
		font-weight: 400;
		text-align: center;

		@media (max-width: 500px) {
			font-size: 1.2rem;
		}
	}
`;
