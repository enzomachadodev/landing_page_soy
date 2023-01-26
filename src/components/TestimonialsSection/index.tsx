import { Carousel } from "react-bootstrap";
import { testimonials } from "../../data";
import { StyledTestimonial } from "./style";
import { Container } from "../Container/style";

const TestimonialSection = () => {
	return (
		<StyledTestimonial id="depoimentos">
			<Container>
				<div className="sectionTitleBox">
					<span data-aos="fade-right">Veja o que dizem nossos clientes</span>
					<h2 data-aos="fade-right">Depoimentos</h2>
				</div>
				<span className="sectionText">
					Toda atenção e cuidado necessários para te entregar uma harmonização,
					naturalmente, rejuvenescida e uma experiência exclusiva!
				</span>
				<a href="#inicio" className="queryBtn" target="_blank">
					quero agendar uma consulta
				</a>

				<Carousel data-aos="fade-up">
					{testimonials.map((e) => (
						<Carousel.Item interval={3000} key={e.name}>
							<div className="cardSlider">
								<div className="clientInfo">
									<img src={e.img} alt="" />
									<h3 className="testimonialsName">{e.name}</h3>
								</div>
								<p className="testimonialsText">&quot;{e.text}&quot;</p>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</Container>
		</StyledTestimonial>
	);
};

export default TestimonialSection;
