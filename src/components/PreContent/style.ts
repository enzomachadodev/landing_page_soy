import styled from "styled-components";

export const StyledPreContent = styled.div`
	width: 100%;
	background-color: var(--white);
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid var(--sand);

	.textBox {
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1px solid var(--sand);

		h2 {
			text-align: center;
			width: 100%;
			max-width: 400px;
			color: var(--brown);
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
	}

	.name {
		font-weight: 700;
		color: var(--dark-brown);
		margin-top: 2rem;
	}

	.subtitle {
		text-align: center;
		color: var(--brown);
	}

	.text {
		margin-top: 2rem;
		color: var(--brown);
		font-size: 1.3rem;
		font-weight: 400;
		text-align: center;
		max-width: 400px;
	}
`;
