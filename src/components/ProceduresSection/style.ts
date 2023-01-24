import styled from "styled-components";

export const StyledProcedures = styled.div`
	padding-top: 75px;
	width: 100%;
	background-color: var(--white);

	ul {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: 0;
		padding: 0;

		@media (max-width: 500px) {
			justify-content: space-around;
			gap: 0;
		}
	}
`;
