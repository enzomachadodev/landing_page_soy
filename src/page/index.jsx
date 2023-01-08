import { useEffect } from "react";
import Aos from "aos";
import ContactSection from "../components/ContactSection/index";
import FooterSection from "../components/FooterSection/index";
import Header from "../components/Header/index";
import HomeSection from "../components/HomeSection/index";
import ProduceduresSection from "../components/ProceduresSection/index";
import ResultsSection from "../components/ResultsSection/index";
import TestimonialSection from "../components/TestimonialsSection/index";
import { StyledMainPage } from "./style";
import "aos/dist/aos.css";

const MainPage = () => {
	const cont = 1;
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, [cont]);
	return (
		<StyledMainPage>
			<Header />
			<HomeSection />
			<ProduceduresSection />
			<TestimonialSection />
			<ResultsSection />
			<ContactSection />
			<FooterSection />
		</StyledMainPage>
	);
};

export default MainPage;
