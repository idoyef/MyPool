import React from "react";
import { VideoBg } from "./BannerElements";
import Video from "../../videos/banner-bg.mp4";

function Banner() {
  return <VideoBg autoPlay loop muted src={Video} type="video.mp4" />;
}

export default Banner;
