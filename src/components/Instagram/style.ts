import styled from "styled-components";
const colagem = require("../../assets/images/colagem.png");
const colagem_2 = require("../../assets/images/colagem_2.png");

export const StyledInstagram = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	.back {
		width: 100%;
		height: 100%;
		filter: brightness(0.7);
		background-image: url(${colagem});
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		position: relative;
		z-index: 0;

		@media (max-width: 500px) {
			background-image: url(${colagem_2});
			background-attachment: unset;
		}
	}

	h2 {
		font-size: 3rem;
		font-family: var(--font-secundary);
		color: #fff;
		text-align: center;
		font-weight: 600;
		position: absolute;
		top: 20%;
		text-transform: uppercase;

		@media (max-width: 500px) {
			font-size: 2rem;
		}
	}

	.instaBtn {
		top: 50%;
		position: absolute;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 300px;
		max-width: 300px;
		height: 100px;
		border-radius: 8px;
		border: none;
		padding: 20px 0px;

		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		background: #f09433;
		background: -moz-linear-gradient(
			45deg,
			#f09433 0%,
			#e6683c 25%,
			#dc2743 50%,
			#cc2366 75%,
			#bc1888 100%
		);
		background: -webkit-linear-gradient(
			45deg,
			#f09433 0%,
			#e6683c 25%,
			#dc2743 50%,
			#cc2366 75%,
			#bc1888 100%
		);
		background: linear-gradient(
			45deg,
			#f09433 0%,
			#e6683c 25%,
			#dc2743 50%,
			#cc2366 75%,
			#bc1888 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );

		@media (max-width: 500px) {
			width: 250px;
			height: 80px;
		}

		.logoBox {
			height: 100%;
			width: 30%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-right: 1px solid var(--gray-1);
			font-size: 50px;
		}

		.igLogo {
			color: #fff;

			@media (max-width: 500px) {
				font-size: 2.7rem;
			}
		}

		.nameBox {
			width: 70%;
			color: #fff;
			font-size: 1.05rem;
			font-weight: 600;
			display: flex;
			align-items: center;
			justify-content: center;

			@media (max-width: 500px) {
				font-size: 0.9rem;
			}
		}
	}
`;
