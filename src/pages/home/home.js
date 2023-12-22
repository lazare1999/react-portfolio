import React from "react";
import "./home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introData, meta } from "../../content_option";
import {SocialIcons} from "../../components/socialicons";
import YourLocalImage from "../../assets/lazo.jpg"

export const Home = () => {
  return (
      <HelmetProvider>
        <section id="home" className="section">
          <Helmet>
            <meta charSet="utf-8"/>
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
            <div className="intro_sec d-block d-lg-flex align-items-center ">
                <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                    <div className="align-self-center ">
                        <div className="intro mx-auto">
                            <h2 className="mb-1x">{introData.title}</h2>
                            <h1 className="fluidz-48 mb-1x">
                                <Typewriter
                                    options={{
                                        strings: [
                                            introData.animated.first,
                                            introData.animated.second,
                                            introData.animated.third,
                                            introData.animated.fourth
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 10,
                                    }}
                                />
                            </h1>
                            <p className="mb-1x">{introData.description}</p>
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
