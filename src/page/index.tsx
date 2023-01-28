import { useEffect, useContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { StyledMainPage } from "./style";
import ContactSection from "../components/ContactSection/index";
import FooterSection from "../components/FooterSection/index";
import Header from "../components/Header/index";
import HomeSection from "../components/HomeSection/index";
import ProduceduresSection from "../components/ProceduresSection/index";
import TestimonialSection from "../components/TestimonialsSection/index";
import LocalizationSection from "../components/LocalizationSection";
import Instagram from "../components/Instagram";
import ModalText from "../components/ModalText";
import { GlobalContext } from "../context";
import PreContent from "../components/PreContent";
import WhatsBtn from "../components/WhatsBtn";
import TextModal from "../components/TextModal";
import SliderModal from "../components/SliderModal";

const MainPage = () => {
	const cont = 1;
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, [cont]);

	const { setTextModal, textModal, setSliderModal, sliderModal } = useContext(GlobalContext);

	return (
		<>
			<StyledMainPage>
				<TextModal show={textModal} onHide={() => setTextModal(false)} />
				<SliderModal show={sliderModal} onHide={() => setSliderModal(false)} />
				<Header />
				<HomeSection />
				<PreContent />
				<ProduceduresSection />
				<TestimonialSection />
				<ContactSection />
				<Instagram />
				<LocalizationSection />
				<FooterSection />
				<WhatsBtn />
			</StyledMainPage>
		</>
	);
};

export default MainPage;
