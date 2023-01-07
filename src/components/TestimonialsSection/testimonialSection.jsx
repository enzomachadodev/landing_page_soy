import { StyledTestimonial } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "../../data";

const TestimonialSection = () => {
	return (
		<StyledTestimonial id="depoimentos">
			<h2>TESTIMONIAL SECTION</h2>
			<Carousel
				showThumbs={false}
				emulateTouch={true}
				showArrows={false}
				showStatus={false}
				swipeable={true}
			>
				{testimonials.map((t) => (
					<div key={t.name} className="card">
						<div className="innerCard">
							<h2>{t.name}</h2>
							<span>{t.text}</span>
						</div>
					</div>
				))}
			</Carousel>
		</StyledTestimonial>
	);
};

export default TestimonialSection;
