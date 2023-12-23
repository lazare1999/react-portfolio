import React from "react";
import "./socialicons.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { socialProfiles } from "../../content_option";

export const SocialIcons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialProfiles.github && (
          <li>
            <a href={socialProfiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialProfiles.facebook && (
          <li>
            <a href={socialProfiles.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialProfiles.linkedin && (
          <li>
            <a href={socialProfiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
