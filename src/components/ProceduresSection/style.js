import styled from "styled-components";

export const StyledProcedures = styled.div`
	padding-top: 75px;
	width: 100%;
	border: 1px solid red;
	background-color: var(--white);

	ul {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-left: -16px;

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: nowrap;
		}
	}
`;
