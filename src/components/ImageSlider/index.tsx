import { useState, useEffect } from "react";
import { StyledSlider } from "./style";

interface ISliderProps {
	props: string[];
	time: number;
}

const Slider = ({ props, time }: ISliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = props.length;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
		console.log("next");
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
		console.log("prev");
	};

	useEffect(() => {
		const interval = setInterval(
			() => setCurrentSlide(currentSlide === props.length - 1 ? 0 : currentSlide + 1),
			time
		);

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<StyledSlider>
			{props.map((slide, index) => (
				<div className={index === currentSlide ? "slide active" : "slide"} key={index}>
					{index === currentSlide && <img src={slide} alt="" />}
				</div>
			))}
		</StyledSlider>
	);
};

export default Slider;
