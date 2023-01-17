import styled from "styled-components";

export const StyledCard = styled.li`
	width: 45%;
	min-width: 165px;
	max-width: 300px;
	border-radius: 8px;
	height: 220px;
	overflow: visible;
	background-color: #fff;
	border: 2px solid var(--pink);
	margin-bottom: 50px;
	margin-top: 20px;
	//box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

	/* @media (max-width: 1000px) {
		width: 30%;
	}

	@media (max-width: 768px) {
		width: 45%;
		max-width: 250px;
		height: 350px;
	}

	@media (max-width: 480px) {
		height: 300px;
	} */

	.carousel {
		width: 150px;
		height: 150px;
		top: -30px;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 8px;
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}

	.carousel-control-prev,
	.carousel-control-next,
	.carousel-indicators {
		display: none;
	}

	.carousel-slide {
		/* width: 70px; */
		overflow: hidden;
		border-radius: 8px;
	}

	.carousel-inner {
	}

	.carousel-item {
		overflow: hidden;
		width: 100%;
		height: 100%;
		max-height: 300px;
		border-radius: 8px;
	}

	.slideImg {
		width: 150px;
		height: 150px;
		position: relative;
		border-radius: 8px;

		/* @media (max-width: 768px) {
			height: 246px;
		}

		@media (max-width: 480px) {
			height: 150px;
		} */
	}

	.cardInfo {
		margin-top: -20px;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h3 {
			width: 100%;
			padding: 2px;
			font-size: 1.4rem;
			text-align: center;
			font-family: var(--font-secundary);
			text-transform: uppercase;
			color: var(--dark-brown);
		}
	}

	.btnBox {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 150px;
		margin: 0 auto;
		margin-top: 7px;
		border: 2px solid var(--pink);
		border-radius: 8px;
		gap: 2px;
		background-color: var(--pink);
		overflow: hidden;

		button {
			width: 50%;
			border: none;
			background-color: #fff;
		}
	}
`;
