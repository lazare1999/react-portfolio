// @flow

import React from "react";
import {
  GitHub,
  Facebook,
  Linkedin,
} from "react-feather";
import { socialProfiles } from "./contentOption";

export const SocialIcons = React.memo(({}) => {
  return (
    <div className="stick_follow_icon">
        {socialProfiles.github && (
            <div >
                <a href={socialProfiles.github} aria-description="github" aria-label="github" target="_blank">
                    <GitHub className="social_icons"/>
                </a>
            </div>
        )}
        {socialProfiles.facebook && (
            <div>
                <a href={socialProfiles.facebook} aria-description="facebook" aria-label="facebook" target="_blank">
                    <Facebook className="social_icons"/>
                </a>
            </div>
        )}
        {socialProfiles.linkedin && (
            <div>
                <a href={socialProfiles.linkedin} aria-description="linkedin" aria-label="linkedin" target="_blank">
                    <Linkedin className="social_icons"/>
                </a>
            </div>
        )}
    </div>
  );
});
