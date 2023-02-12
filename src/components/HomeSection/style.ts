import styled from "styled-components";

export const StyledHome = styled.div`
	width: 100%;
	height: 900px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: rgb(222, 209, 189);
	background: -moz-linear-gradient(
		180deg,
		rgba(222, 209, 189, 1) 7%,
		rgba(250, 250, 250, 1) 100%
	);
	background: -webkit-linear-gradient(
		180deg,
		rgba(222, 209, 189, 1) 7%,
		rgba(250, 250, 250, 1) 100%
	);
	background: linear-gradient(180deg, rgba(222, 209, 189, 1) 7%, rgba(250, 250, 250, 1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ded1bd",endColorstr="#fafafa",GradientType=1);
	overflow: hidden;

	@media (max-width: 500px) {
		height: 550px;
	}

	.bannerContainer {
		width: 100%;
		max-width: 1400px;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		position: relative;

		img {
			margin-top: auto;
			margin-left: auto;
			height: 120%;

			@media (max-width: 500px) {
				margin-top: 0px;
				margin-bottom: auto;
				height: 90%;
			}
		}
	}

	.textBox {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		z-index: 1;
		margin-left: 2rem;
		margin-bottom: 15%;

		@media (max-width: 768px) {
			margin-left: 1rem;
			margin-bottom: 25%;
		}

		@media (max-width: 500px) {
			margin-left: 1rem;
			margin-bottom: 12%;
		}

		h1 {
			font-weight: 300;
			font-family: var(--font-secundary);
			text-transform: uppercase;
			font-size: 3.5rem;
			max-width: 500px;
			color: var(--dark-brown);

			@media (max-width: 1000px) {
				font-size: 3rem;
				max-width: 400px;
			}

			@media (max-width: 500px) {
				font-size: 2rem;
				font-weight: 400;
			}
		}

		h2 {
			max-width: 500px;
			color: var(--brown);
			font-size: 1.5rem;

			@media (max-width: 1000px) {
				max-width: 400px;
			}

			@media (max-width: 768px) {
				max-width: 350px;
				font-size: 1.1rem;
			}
		}

		a {
			position: relative;
			font-weight: 600;
			font-size: 0.9rem;
			color: var(--brown);
			transition: 0.5s;
			background: none;
			border-bottom: 1px solid var(--brown);
		}
	}

	.fotoBox {
		border: 1px solid green;
		min-width: 375px;
		width: 375px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		position: a;
		z-index: 0;
	}
`;
