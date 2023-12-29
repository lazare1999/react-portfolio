// @flow

import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll/modules";
import LanguageSelector from "./languageSelector";

const HeaderMain = React.memo(({}) => {

  const { t} = useTranslation();

  return (
    <>
      <header className="nav">

        <nav className="nav__container__actions">
          <div>
            <Link activeClass="active" smooth spy to="home">
              {t('main.home')}
            </Link>
          </div>
          <div>
            <Link activeClass="active" smooth spy to="about">
              {t('main.about')}
            </Link>
          </div>
          <div>
            <Link activeClass="active" smooth spy to="projects">
              {t('main.projects')}
            </Link>
          </div>
          <div>
            <Link activeClass="active" smooth spy to="contact">
              {t('main.contact')}
            </Link>
          </div>
        </nav>
        <LanguageSelector/>
      </header>
    </>
  );
});

export default HeaderMain;
