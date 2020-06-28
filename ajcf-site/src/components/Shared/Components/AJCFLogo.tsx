import React from "react";
import { css } from "@emotion/core";
import AJCFLogoWhite from "../../../assets/img/ajcf-logo-white.png";

const ajcfLogoStyle = css({
  width: "10vh",
  marginTop: "1vh",
});

const AJCFLogo = () => <img id="ajcf-logo" src={AJCFLogoWhite} alt="AJCF logo" css={ajcfLogoStyle} />;

export { AJCFLogo };
