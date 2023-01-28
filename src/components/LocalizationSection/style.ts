import styled from "styled-components";

export const StyledLocalization = styled.div`
	padding-top: 75px;
	width: 100%;
	padding-bottom: 75px;
	background: rgb(255, 255, 255);
	background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(222, 209, 189, 1) 95%);
	background: -webkit-linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(222, 209, 189, 1) 95%
	);
	background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(222, 209, 189, 1) 95%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ded1bd",GradientType=1);

	.address {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		h2 {
			font-family: var(--font-secundary);
			text-transform: uppercase;
			font-size: 2rem;
			margin-left: 1rem;
			border-bottom: 2px solid var(--pink);
			padding-left: 3px;
			margin-top: 20px;
			margin-bottom: 20px;
			color: var(--brown);
		}
	}

	.divBox {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	.mapBox {
		width: 60%;
		height: 120px;

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.textBox {
		width: 30%;
		height: 120px;
		margin: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		@media (max-width: 768px) {
			width: 100%;
		}

		span {
			font-size: 1.1rem;
			font-weight: 600;
			color: var(--pink);
			text-transform: uppercase;
		}

		p {
			font-size: 1.2rem;
			font-weight: 500;
			color: var(--brown);
			text-align: justify;
		}
	}
`;
