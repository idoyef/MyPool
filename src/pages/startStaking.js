import React, { useState } from "react";
import Footer from "../components/Footer";
import HowToStakeSection from "../components/HowToStakeSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function StartStakingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <scrollToTop />

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HowToStakeSection />
      <Footer />
    </>
  );
}

export default StartStakingPage;
