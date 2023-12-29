// @flow

import React, {useEffect} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {SocialIcons} from "../socialicons";
import {useTranslation} from "react-i18next";

export const Home = React.memo(() => {

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
                                <div className="intro_data_title">{t('introData.title')}</div>
                                <div className="intro_data_options">
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
                                </div>
                                <div className="intro_data_description">{t('introData.description')}</div>
                                <div><SocialIcons/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
});
