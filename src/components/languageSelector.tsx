import React, { useState } from "react";
import i18n from "../conf/i18n";
import {Globe} from "react-feather";

const LanguageSelector = React.memo(() => {
    const [currentLanguage, setCurrentLanguage] = useState('en'); // Initial language code

    const toggleLanguage = async () => {
        const newLanguage = currentLanguage === 'ge' ? 'en' : 'ge'; // Toggle between 'ge' and 'en'
        setCurrentLanguage(newLanguage);
        i18n.changeLanguage(newLanguage).then(r => r);
    };

    return (
        <div className="floating_button_language">
            <div>
                <Globe
                    className="language_icon"
                    onClick={toggleLanguage}
                />
            </div>
        </div>
    );
});

export default LanguageSelector;