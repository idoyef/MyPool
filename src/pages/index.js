import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homePromotionObj,
} from "../components/InfoSection/data";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [modal, setModal] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // setTimeout(() => {
  //   setModal(<Modal showModal={showModal} setShowModal={setShowModal} />);
  // }, 500);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {/* {modal} */}
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homePromotionObj} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  );
}

export default Home;
