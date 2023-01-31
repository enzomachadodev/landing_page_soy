import styled from "styled-components";

export const StyledPreContent = styled.div`
	width: 100%;
	background-color: var(--white);
	display: flex;
	flex-direction: column;
	align-items: center;

	.difeBox {
		padding: 1rem;
		padding-bottom: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.name {
		font-weight: 500;
		color: var(--dark-brown);
		margin-top: 3.3rem;
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
