import React from "react";
import { Button } from "../ButtonElement";
import {
  BtnWrap,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  Subtitle,
  TopLine,
  InfoRow,
  Column1,
  TextWrapper,
} from "./infoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  topLineLightText,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine topLineLightText={topLineLightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  <span style={{ fontWeight: "bold" }}>New delegators</span>
                  {description}
                  <div>
                    Only this August-September, we are{" "}
                    <span style={{ fontWeight: "bold" }}>doubling</span> your
                    first reward (up to 250 ADA).
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      * For those who still stake with us at the date of receipt
                      of reward.
                    </div>
                  </div>
                </Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
