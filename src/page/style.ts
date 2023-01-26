import styled from "styled-components";

interface IStyledMainPageProps {
	modal: boolean;
}

export const StyledMainPage = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-size: cover;
	position: relative;

	/* pointer-events: ${({ modal }: IStyledMainPageProps) => (modal ? "none" : "unset")}; */
`;
