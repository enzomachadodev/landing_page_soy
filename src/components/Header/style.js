import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--gray-2);
	padding: 1rem;

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}

	button {
		display: none;
	}

	@media (max-width: 768px) {
		ul {
			display: none;
		}
		button {
			display: unset;
		}
	}
`;
