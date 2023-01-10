import { useState } from "react";
import { StyledCard } from "./style";
import { Carousel } from "react-bootstrap";

const Card = (proceObj, index) => {
	return (
		<StyledCard key={proceObj.name}>
			<Carousel>
				<Carousel.Item interval={3000} key={index} controls={false}>
					<img
						src="https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2575.jpg?w=2000"
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000} key={index}>
					<img
						src="https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2575.jpg?w=2000"
						alt=""
					/>
				</Carousel.Item>
			</Carousel>
		</StyledCard>
	);
};

export default Card;
