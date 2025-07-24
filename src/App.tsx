import React from "react";

import Title from "./component/title/Title";
import CTASection from "./component/cta-section/CTASection";
import Services from "./component/services/Services";
import AboutUs from "./component/aboutUs/AboutUs";
import Cases from "./component/cases/Cases";
import ContactUs from "./component/contactUs /ContactUs";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import {useScroll} from "./config/hooks/hookLocate";
export default function App() {
    useScroll()

    return (
      <div className="App">
          <Header />
        <Title />
        <CTASection />
        <Services />
        <AboutUs />
        <Cases />
        <ContactUs/>
          <Footer />
      </div>
  );
}
