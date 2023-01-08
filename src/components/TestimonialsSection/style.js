import styled from "styled-components";

export const StyledTestimonial = styled.div`
	width: 100%;
	height: 900px;
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 75px;
	background-attachment: fixed;

	.cardSlider {
		height: 500px;
		width: 100%;
		max-width: 500px;
		margin: 50px auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0rem 2.6rem;
		border-radius: 40px;
		background-color: white;
		-webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.4);
		box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.4);
	}

	.clientInfo {
		width: 100%;
		max-width: 400px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 20px;
		overflow: hidden;

		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
	}
`;
