import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const SocialIcons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
