import React from "react";
import "./about.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Row, Col, Container} from "react-bootstrap";
import {
  dataAbout,
  meta,
  workTimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <section id="about">
          <Helmet>
            <meta charSet="utf-8"/>
            <title> About | {meta.title}</title>
            <meta name="description" content={meta.description}/>
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About me</h1>
              <hr className="t_border my-4 ml-0 text-left"/>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataAbout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{dataAbout.aboutMe}</p>
              </div>
            </Col>
          </Row>
          <Row className=" sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timeline</h3>
            </Col>
            <Col lg="7">
              <table className="table table-dark caption-top">
                <tbody>
                {workTimeline.map((data, i) => {
                  return (
                      <tr key={i}>
                        <th scope="row">{data.jobTitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                  );
                })}
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Skills</h3>
            </Col>
            <Col lg="7">
              {skills.map((data, i) => {
                return (
                    <div key={i}>

                      {/*<CircularProgress*/}
                      {/*    label={data.name}*/}
                      {/*    size="sm"*/}
                      {/*    value={data.value}*/}
                      {/*    color="primary"*/}
                      {/*    showValueLabel={true}*/}
                      {/*/>*/}

                    </div>
                );
              })}
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lang="5">
              <h3 className="color_sec py-4">services</h3>
            </Col>
            <Col lg="7">
              {services.map((data, i) => {
                return (
                    <div className="service_ py-4" key={i}>
                      <h5 className="service__title">{data.title}</h5>
                      <p className="service_desc">{data.description}</p>
                    </div>
                );
              })}
            </Col>
          </Row>
        </section>
      </Container>

    </HelmetProvider>
  );
};
