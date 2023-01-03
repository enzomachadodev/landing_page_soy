import styled from "styled-components";

export const StyledFooter = styled.footer`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--black);
	bottom: 0;

	.container_footer {
		padding: 1rem;
		width: 100%;
		height: 80%;
		max-width: 1400px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		color: var(--gray-1);

		h4 {
			width: 100%;
			text-align: center;
			margin-bottom: 20px;
		}
	}

	.social_footer {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.contact_footer {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.rights {
		height: 20%;
		width: 100%;
		border-top: 1px solid var(--gold);
		display: flex;
		align-items: center;
		justify-content: center;

		span {
			color: var(--gold);
		}
	}
	h4,
	p,
	span {
		color: var(--gray-1);
	}

	@media (max-width: 768px) {
		.container_footer {
			flex-direction: column;
		}
	}
`;
