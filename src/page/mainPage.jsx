import AboutSection from "../components/AboutSection/aboutSection";
import ContactSection from "../components/ContactSection/contactSection";
import FooterSection from "../components/FooterSection/footerSection";
import Header from "../components/Header/header";
import HomeSection from "../components/HomeSection/homeSection";
import ProduceduresSection from "../components/ProceduresSection/proceduresSection";
import ResultsSection from "../components/ResultsSection/resultsSection";
import TestimonialSection from "../components/TestimonialsSection/testimonialSection";
import { StyledMainPage } from "./style";

const MainPage = () => {
	return (
		<StyledMainPage>
			<Header />
			<HomeSection />
			<ProduceduresSection />
			<AboutSection />
			<ResultsSection />
			<TestimonialSection />
			<ContactSection />
			<FooterSection />
		</StyledMainPage>
	);
};

export default MainPage;
