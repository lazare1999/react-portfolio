import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { socialProfiles } from "./contentOption";

export const SocialIcons = () => {
  return (
    <div className="stick_follow_icon">
        {socialProfiles.github && (
            <div>
                <a href={socialProfiles.github}>
                    <FaGithub />
                </a>
            </div>
        )}
        {socialProfiles.facebook && (
            <div>
                <a href={socialProfiles.facebook}>
                    <FaFacebookF />
                </a>
            </div>
        )}
        {socialProfiles.linkedin && (
            <div>
                <a href={socialProfiles.linkedin}>
                    <FaLinkedin />
                </a>
            </div>
        )}
    </div>
  );
};