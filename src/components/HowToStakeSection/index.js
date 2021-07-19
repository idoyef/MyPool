import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HowToStakeContainer,
  HowToStakeBg,
  VideoBg,
  HowToStakeContent,
  HowToStakeH1,
  HowToStakeP,
  HowToStakeBtnWrapper,
  CopyIcon,
  ArrowRight,
  ArrowDone,
} from "./HowToStakeElements";
import Video from "../../videos/data.mp4";

const INITIAL_BUTTON_TEXT = "Copy Pool ID";
const COPIED_TEXT = "Pool ID Copied";

const HowToStakeSection = () => {
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
    <HowToStakeContainer id="home">
      <HowToStakeBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
      </HowToStakeBg>
      <HowToStakeContent></HowToStakeContent>
    </HowToStakeContainer>
  );
};

export default HowToStakeSection;
