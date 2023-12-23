import React, { useState } from "react";
import "./contact.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../../content_option";
import * as emailJs from "@emailjs/browser";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailJs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            loading: false,
            alertMessage: "SUCCESS! ,Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            alertMessage: `Failed to send!, ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <HelmetProvider>
        <Container>
          <section id="contact">
            <Helmet>
              <meta charSet="utf-8"/>
              <title>{`${meta.title} | Contact`}</title>
              <meta name="description" content={meta.description}/>
            </Helmet>

            <div className="mb-5 mt-3 pt-md-3">
              <h1 className="display-4 mb-4">Contact Me</h1>
              <hr className="t_border my-4 ml-0 text-left"/>
            </div>

            <div className="split-screen-container">
              <div className="split-section">
                <Alert
                    show={formData.show}
                    variant={formData.variant}
                    className={`rounded-0 co_alert ${formData.show ? 'd-block' : 'd-none'}`}
                    onClose={() => setFormData({show: false})}
                    dismissible
                >
                  <p className="my-0">{formData.alertMessage}</p>
                </Alert>
              </div>
              <div className="split-section">
                <h3 className="color_sec py-4">Get in touch</h3>
                <address>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
                  <br/>
                  <br/>
                  {contactConfig.hasOwnProperty('YOUR_FONE') ? (
                      <p>
                        <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                      </p>
                  ) : (
                      ''
                  )}
                </address>
                <p>{contactConfig.description}</p>
              </div>
              <div className="split-section">
                <form onSubmit={handleSubmit} className="contact__form w-100">
                  <div className="form-group">
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name || ''}
                        type="text"
                        required
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email || ''}
                        required
                        onChange={handleChange}
                    />
                  </div>
                  <textarea
                      className="form-control rounded-0"
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                  ></textarea>
                  <br/>
                  <div className="form-group">
                    <button className="btn ac_btn" type="submit" disabled={formData.loading}>
                      {formData.loading ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </form>
              </div>
            </div>


          </section>

          <div className={formData.loading ? 'loading-bar' : 'd-none'}></div>
        </Container>
      </HelmetProvider>
  );
};
