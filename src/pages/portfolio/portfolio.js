import React from "react";
import "./portfolio.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Row, Col, Container} from "react-bootstrap";
import { dataPortfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <section id="portfolio" className="About-header">
          <Helmet>
            <meta charSet="utf-8"/>
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description}/>
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left"/>
            </Col>
          </Row>
          <div className="mb-5 po_items_ho">
            {dataPortfolio.map((data, i) => {
              return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt=""/>
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>view project</a>
                    </div>
                  </div>
              );
            })}
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};
