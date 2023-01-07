import styled from "styled-components";

export const StyledCard = styled.li`
	width: 45%;
	height: 500px;
	border: 1px solid red;
	margin-bottom: 30px;
	padding: 1rem;
	position: relative;
	overflow: hidden;
	transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 768px) {
		width: 100%;
	}

	div {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 1rem;
		top: ${({ open }) => (open ? "0" : "100%")};
		transition: all 0.8s cubic-bezier(0.6, 0.4, 0, 1);
		background-color: green;
	}
`;
