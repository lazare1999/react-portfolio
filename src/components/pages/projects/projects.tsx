import {useTranslation} from "react-i18next";
import {socialProfiles} from "../../../content_option";
import {Helmet, HelmetProvider} from "react-helmet-async";
import './projects.scss';

export const Projects = () => {

  const { t} = useTranslation();
  const obj = t('dataPortfolio', { returnObjects: true });
  const array = Object.keys(obj).map((key) => {
    return obj[key as keyof typeof obj];
  });

  // JavaScript function to add the 'animate' class to the button
  function animateButton() {
    const button = document.querySelector('.other_projects');
    button?.classList.add('animate');

    // Remove the 'animate' class after the animation completes
    setTimeout(() => {
      button?.classList.remove('animate');
      window.open(
          socialProfiles.github, "_blank");
    }, 300);


  }

  return (
      <HelmetProvider>
        <section id="portfolio" className="About-header">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{t('title')}</title>
          </Helmet>
          <div className="mb-5 mt-3 pt-md-3">
            <h1 className="display-4 mb-4">{t('main.projects')}</h1>
            {" "}
            <hr className="t_border my-4 ml-0 text-left"/>
          </div>
          <div className="mb-5 po_items_ho">
            {array.map((data: any, i) => {
              return (
                  <div key={i} className="po_item">
                    <img src={require('../../../assets/' + data.img)} alt=""/>
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>{t('view_project')}</a>
                    </div>
                  </div>
              );
            })}
          </div>

          <div className="other_button_div">
            <button className="other_projects" onClick={animateButton}>{t('see_other_projects')}</button>
          </div>

        </section>
      </HelmetProvider>
  );
};
