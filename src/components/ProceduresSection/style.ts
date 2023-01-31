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
		margin-top: 1rem;
		padding: 0;
		padding-bottom: 75px;

		@media (max-width: 500px) {
			justify-content: space-around;
			gap: 0;
		}
	}
`;
