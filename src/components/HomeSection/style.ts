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
		height: 700px;
	}

	.bannerContainer {
		width: 100%;
		max-width: 1400px;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;

		h1 {
			position: absolute;
			margin-left: 3rem;
			margin-bottom: 20%;
			font-family: "Allura", cursive;
			font-size: 4rem;
			color: var(--dark-brown);
		}

		img {
			margin-top: auto;
			margin-left: auto;
			height: 120%;
		}
	}

	.textBox {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		position: relative;
		z-index: 1;

		h1 {
			margin-left: 2rem;
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
