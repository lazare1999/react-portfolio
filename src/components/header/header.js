import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";
import './header.css'
import LanguageSelector from "../LanguageSelector";

const HeaderMain = () => {

  const { t} = useTranslation();

  return (
    <>
      <header className="nav">

        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                {t('main.home')}
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                {t('main.about')}
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="portfolio">
                {t('main.portfolio')}
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                {t('main.contact')}
              </Link>
            </li>
          </ul>
        </nav>
        <LanguageSelector/>
      </header>
    </>
  );
};

export default HeaderMain;
