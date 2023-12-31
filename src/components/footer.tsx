// @flow

import React from 'react';
import {useTranslation} from "react-i18next";
import {contactConfig} from "./contentOption";

const Footer = React.memo(({}) => {
    const { t} = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="split-section">
                    <address>
                        <strong>{t("email")}:</strong>{' '}
                        <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
                        <br/>
                        <br/>
                        {contactConfig.hasOwnProperty('YOUR_FONE') ? (
                            <p>
                                <a href={'tel:'+contactConfig.YOUR_FONE}><strong>{t("phone")}:</strong> {contactConfig.YOUR_FONE_2}</a>
                            </p>
                        ) : (
                            ''
                        )}
                    </address>
                    <p>{contactConfig.description}</p>
                </div>
            </div>
        </footer>
    );
});

export default Footer;