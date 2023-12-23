import React from "react";
import i18n from '../i18n';
import geo from "../assets/geo.png";
import usa from "../assets/usa.webp";

const LanguageSelector = () => {
    const changeLanguage = (languageCode) => {
        i18n.changeLanguage(languageCode);
    };

    return (
        <div className="floating_button_language">
            <div>
                <img className="language_image" src={geo} alt="English" onClick={() => changeLanguage('ge')}/>
                <img className="language_image" src={usa} alt="English" onClick={() => changeLanguage('en')}/>
            </div>
        </div>
    );
};

export default LanguageSelector;