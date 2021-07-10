import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  CopyIcon,
  ArrowRight,
  ArrowDone,
} from "./HeroElements";
import Video from "../../videos/video (1).mp4";

const INITIAL_BUTTON_TEXT = "Copy Pool ID";
const COPIED_TEXT = "Pool ID Copied";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [clickInAction, setClickInAction] = useState(false);
  const [icon, setIcon] = useState(<ArrowRight />);
  const [buttonText, setButtonText] = useState(INITIAL_BUTTON_TEXT);

  const onHover = () => {
    setHover(!hover);
    if (!clickInAction) {
      setIcon(getIcon());
    }
  };

  const getIcon = () => {
    return !hover ? <CopyIcon /> : <ArrowRight />;
  };

  const handleClick = () => {
    navigator.clipboard.writeText(
      "ab45a813bf36d7f25bbc6dad47aca65b32f9e54362e0806c8c4e514c"
    );
    setClickInAction(true);
    setButtonText(COPIED_TEXT);
    setIcon(<ArrowDone />);

    setTimeout(() => {
      setClickInAction(false);
      setButtonText(INITIAL_BUTTON_TEXT);
      setIcon(!hover ? <CopyIcon /> : <ArrowRight />);
    }, 2000);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Cardano Stake Pool</HeroH1>
        <HeroP>Stake your ADA for passive income</HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={handleClick}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={true}
            dark={true}
          >
            {buttonText} {icon}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
