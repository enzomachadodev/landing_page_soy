import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { StyledMainPage } from "./style";
import ContactSection from "../components/ContactSection/index";
import FooterSection from "../components/FooterSection/index";
import Header from "../components/Header/index";
import HomeSection from "../components/HomeSection/index";
import ProduceduresSection from "../components/ProceduresSection/index";
import TestimonialSection from "../components/TestimonialsSection/index";
import FinalSection from "../components/FinalSection";
import Instagram from "../components/Instagram";

const MainPage = () => {
	const cont = 1;
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, [cont]);

	return (
		<>
			<StyledMainPage>
				<Header />
				<HomeSection />
				<ProduceduresSection />
				<TestimonialSection />
				<ContactSection />
				<Instagram />
				<FinalSection />
				<FooterSection />
			</StyledMainPage>
		</>
	);
};

export default MainPage;