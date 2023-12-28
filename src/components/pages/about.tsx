// @flow

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Row, Col, Container} from "react-bootstrap";

import {useTranslation} from "react-i18next";
import {UbuntuApplication} from "../ubuntu_terminal/ubuntuApplication";


export const About = () => {
  const { t} = useTranslation();

  const obj = t('workTimeline', { returnObjects: true });
  const array = Object.keys(obj).map((key) => {
    return obj[key as keyof typeof obj];
  });


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
            <Col lg="7" className="d-flex align-items-center">
              <div className="about_me">
                <p>{t('dataAbout.aboutMe')}</p>
              </div>
            </Col>
          </Row>
          <Row className=" sec_sp">
            <Col lg="7">
              <table className="table custom-table">
                <thead>
                <tr>
                  <th scope="col">{t('work_timeline')}</th>
                  <th scope="col">{t('where')}</th>
                  <th scope="col">{t('date')}</th>
                </tr>
                </thead>
                <tbody>
                {array.map((data:any, i) => (
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

          <div className="ubuntu_div">
            <UbuntuApplication/>
          </div>

        </section>
      </Container>

    </HelmetProvider>
  );
};
