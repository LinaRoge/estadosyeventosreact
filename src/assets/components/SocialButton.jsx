import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function SocialButton({ icono }) {
  return <FontAwesomeIcon icon={icono} />;
}

export default SocialButton;
