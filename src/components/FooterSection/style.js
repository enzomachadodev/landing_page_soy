import styled from "styled-components";

export const StyledFooter = styled.footer`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--dark-brown);
	bottom: 0;

	.footerContainer {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100%;
		border: 1px solid red;
	}

	.divLogo {
		width: 100%;
		max-width: 200px;
	}

	.divFooter {
		border: 1px solid red;
		width: 100%;
		max-width: 400px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;

		ul {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0;
		}

		li {
			border: 1px solid red;
			margin-bottom: 10px;
		}

		p {
			font-size: 1rem;
		}
	}

	.rights {
		height: 20%;
		width: 100%;
		border-top: 1px solid var(--gold);
		display: flex;
		align-items: center;
		justify-content: center;

		span {
			color: var(--gold);
		}
	}

	h4,
	p,
	span {
		color: var(--gray-1);
	}

	@media (max-width: 768px) {
	}
`;
