// @flow

import React from "react";
import geo from "../assets/geo.jpg";
import usa from "../assets/usa.jpg";
import i18n from "../conf/i18n";

const LanguageSelector = () => {

    const changeLanguage = ({languageCode}: { languageCode: any }) => {
        i18n.changeLanguage(languageCode).then(r => r);
    };

    return (
        <div className="floating_button_language">
            <div>
                <img className="language_image" src={geo} alt="English" onClick={() => changeLanguage({languageCode: 'ge'})}/>
                <img className="language_image" src={usa} alt="English" onClick={() => changeLanguage({languageCode: 'en'})}/>
            </div>
        </div>
    );
};

export default LanguageSelector;