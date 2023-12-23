import React from "react";
import "./about.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Row, Col, Container} from "react-bootstrap";

import {useTranslation} from "react-i18next";



export const About = () => {
  const { t} = useTranslation();

  return (
    <HelmetProvider>
      <Container className="About-header">
        <section className="customsection" id="about">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{t('title')}</title>
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">{t('main.about')}</h1>
              <hr className="t_border my-4 ml-0 text-left"/>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t('dataAbout.title')}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{t('dataAbout.aboutMe')}</p>
              </div>
            </Col>
          </Row>
          <Row className=" sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t('work_timeline')}</h3>
            </Col>
            <Col lg="7">
              <table className="table custom-table">
                <thead>
                <tr>
                  <th scope="col">{t('job_title')}</th>
                  <th scope="col">{t('where')}</th>
                  <th scope="col">{t('date')}</th>
                </tr>
                </thead>
                <tbody>
                {t('workTimeline', { returnObjects: true }).map((data, i) => (
                    <tr key={i}>
                      <td>{data.jobTitle}</td>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </Col>
          </Row>
          {/*<Row className="sec_sp">*/}
          {/*  <Col lg="5">*/}
          {/*    <h3 className="color_sec py-4">{t('skills')}</h3>*/}
          {/*  </Col>*/}
          {/*  <Col lg="7">*/}
          {/*    <div>*/}
          {/*      {skills.map((data, i) => (*/}
          {/*          <div key={i}>*/}
          {/*            <div className="skill-container">*/}
          {/*              <p>{data.name}</p>*/}
          {/*              <div className="skills" style={{width: `${data.value}%`}}>*/}
          {/*                {data.value}%*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*      ))}*/}
          {/*    </div>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          {/*<Row className="sec_sp">*/}
          {/*  <Col lang="5">*/}
          {/*    <h3 className="color_sec py-4">{t('services_verb')}</h3>*/}
          {/*  </Col>*/}
          {/*  <Col lg="7">*/}
          {/*    {t('services', { returnObjects: true }).map((data, i) => {*/}
          {/*      return (*/}
          {/*          <div className="service_ py-4" key={i}>*/}
          {/*            <h5 className="service__title">{data.title}</h5>*/}
          {/*            <p className="service_desc">{data.description}</p>*/}
          {/*          </div>*/}
          {/*      );*/}
          {/*    })}*/}
          {/*  </Col>*/}
          {/*</Row>*/}
        </section>
      </Container>

    </HelmetProvider>
  );
};
