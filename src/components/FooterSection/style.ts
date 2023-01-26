import styled from "styled-components";

export const StyledFooter = styled.footer`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: var(--dark-brown);
	bottom: 0;

	.footerContainer {
		min-height: 350px;
		width: 100%;
		max-width: 1400px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		gap: 1rem;

		@media (max-width: 768px) {
			flex-direction: column;
		}

		h3 {
			color: var(--sand);
			font-weight: 400;
			text-transform: uppercase;
		}
	}

	.footerLinks {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		height: 100%;
		width: 100%;
		max-width: 450px;
		gap: 1rem;

		img {
			width: 150px;
			height: 150px;
		}
	}

	.linksBox {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 1rem;
		height: 100%;
		width: auto;
		padding: 1rem;

		a {
			color: var(--pink);
			display: flex;
			flex-direction: row;
			gap: 10px;
			align-items: center;
		}
	}

	.iconLogo {
		font-size: 1.5rem;
	}

	.footerAddresses {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 1rem;
		gap: 1rem;

		p {
			color: var(--pink);
		}
	}

	.icon {
		font-size: 1rem;
		color: var(--sand);
	}

	.rights {
		height: auto;
		padding: 1rem;
		width: 100%;
		border-top: 1px solid var(--sand);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		@media (max-width: 768px) {
			flex-direction: column;
		}

		span {
			color: var(--sand);
			text-align: center;
			font-size: 0.8rem;
		}

		a {
			border: 1px solid var(--sand);
			height: 30px;
			width: 30px;
			font-weight: 400;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.rigthsLinks {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
`;
