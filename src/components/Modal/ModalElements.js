import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link as LinkScroll } from "react-scroll";

export const ModalContainer = styled.div`
  top: 0;
  position: fixed;
  z-index: 100;
`;

export const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 1000;
  border-radius: 10px;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin: 5px;
  border: 4px #0daaa3 solid;
  border-radius: 10px;

  p {
    margin-bottom: 1rem;
  }

  h1 {
    animation: color-change 0.8s infinite;
  }

  @keyframes color-change {
    0% {
      color: black;
    }
    50% {
      color: #0daaa3;
    }
    100% {
      color: black;
    }
  }
`;
export const ModalContentHeadline = styled.div`
  padding-bottom: 10px;

  @media screen and (max-width: 420px) {
    width: 210px;
  }
`;

export const ModalDetailsButton = styled(LinkScroll)`
  cursor: pointer;
  padding: 10px 24px;
  background: #0daaa3;
  color: #fff;
  border: none;
  border-radius: 10px;
  border: none;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 1000;
`;
