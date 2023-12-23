import React from "react";
import "./home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {SocialIcons} from "../../socialicons/socialicons";
import YourLocalImage from "../../../assets/lazo.jpg"
import {useTranslation} from "react-i18next";

export const Home = () => {

    const { t} = useTranslation();

    return (
        <HelmetProvider>
            <section id="home" className="section">
              <Helmet>
                <meta charSet="utf-8"/>
                <title>{t('title')}</title>
              </Helmet>
                <div className="intro_sec d-block d-lg-flex align-items-center ">
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center ">
                            <div className="intro mx-auto">
                                <h2 className="mb-1x">{t('introData.title')}</h2>
                                <h1 className="fluidz-48 mb-1x">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                t('introData.animated.first'),
                                                t('introData.animated.second'),
                                                t('introData.animated.third'),
                                                t('introData.animated.fourth'),
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 10,
                                        }}
                                    />
                                </h1>
                                <p className="mb-1x">{t('introData.description')}</p>
                                <div><SocialIcons/></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="h_bg-image order-1 order-lg-2 h-100"
                        style={{ backgroundImage: `url(${YourLocalImage})` }}
                    ></div>
                </div>
            </section>
        </HelmetProvider>
    );
};