import styled from "styled-components";

export const StyledHeader = styled.header`
	position: fixed;
	z-index: 100;
	height: 75px;
	width: 100%;
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0rem 1rem;
	transition: 0.5s;
	background-color: ${({ scroll }) => (scroll ? "rgba(255, 255, 255, 0.7)" : "transparent")};
	backdrop-filter: ${({ scroll }) => (scroll ? "blur(6px)" : "blur(0px)")};
	-webkit-backdrop-filter: ${({ scroll }) => (scroll ? "blur(6px)" : "blur(0px)")};

	.logoBox {
		height: 100%;
		width: 200px;
		overflow-y: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.fixedNav {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 20px;
		gap: 20px;
		margin: 0;

		button {
			position: relative;
			font-weight: 450;
			font-size: 0.9rem;
			color: ${({ scroll }) => (scroll ? "black" : "white")};
			padding-bottom: 1px;
			transition: 0.5s;
			background: none;
			border: none;
		}

		button::after {
			content: "";
			position: absolute;
			width: 100%;
			transform: scaleX(0);
			height: 1px;
			bottom: 0;
			left: 0;
			background-color: #000000;
			transform-origin: bottom right;
			transition: transform 0.25s ease-out;
		}

		li:hover button::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}

	@media (max-width: 768px) {
		.fixedNav {
			display: none;
		}
	}
`;

export const StyledBurger = styled.div`
	@media (min-width: 768px) {
		display: none;
	}

	width: 2rem;
	height: 2rem;
	right: 20px;
	z-index: 20;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;

	div {
		width: 2rem;
		height: 2px;
		background-color: var(--black);
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export const StyledNav = styled.ul`
	list-style: none;
	display: none;
	flex-flow: row nowrap;

	top: 75px;
	display: flex;
	flex-flow: column nowrap;
	position: fixed;
	z-index: 400;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	right: 0;
	height: 100vh;
	width: 100%;
	max-width: 320px;
	padding-top: 1rem;
	transition: transform 0.3s ease-in-out;

	background: rgba(255, 255, 255, 0.7);
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);

	li {
		height: 50px;
		width: 100%;
	}
	li a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: #fff;
	}
`;
