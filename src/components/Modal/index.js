import React, { useRef, useEffect, useCallback } from "react";
// import { useSpring, animated } from "react-spring";
import {
  ModalContainer,
  ModalBg,
  ModalContent,
  ModalImage,
  ModalWrapper,
  ModalDetailsButton,
  CloseModalButton,
} from "./ModalElements";
import { animateScroll as scroll } from "react-scroll";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  // });

  const getMoreDetails = () => {
    setShowModal(false);
    scroll.scrollTo(800);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <ModalContainer>
      {showModal ? (
        <ModalBg ref={modalRef} onClick={closeModal}>
          {/* <animated.div style={animation}> */}
          <ModalWrapper showModal={showModal}>
            {/* <ModalImage
              src={require("../../images/cardano-bg.png").default}
              alt="camera"
            /> */}

            <ModalContent>
              <h1>August Promotion!</h1>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Double your first reward
              </p>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                (up to 100 ADA)
              </p>
              <ModalDetailsButton to="promotion" onClick={getMoreDetails}>
                More Details
              </ModalDetailsButton>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
          {/* </animated.div> */}
        </ModalBg>
      ) : null}
    </ModalContainer>
  );
};

export default Modal;
