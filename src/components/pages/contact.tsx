// @flow

import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Alert } from "react-bootstrap";
import {contactConfig} from "../contentOption";
import * as emailJs from "@emailjs/browser";
import {useTranslation} from "react-i18next";

export const ContactUs = React.memo(() => {

  const { t} = useTranslation();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({ loading: true, show: false, alertMessage: "", variant: "", email: "", name: "", message: "" });

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
            email: "",
            name: "",
            message: "",
            loading: false,
            alertMessage: "SUCCESS! ,Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertMessage: `Failed to send!, ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e:any) => {
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
              <title>{t('title')}</title>
            </Helmet>

            <div className="mb-5 mt-3 pt-md-3">
              <h1 className="display-4 mb-4">{t('main.contact')}</h1>
              <hr className="t_border my-4 ml-0 text-left"/>
            </div>

            <div className="split-screen-container">

              <div className="split-section">
                <Alert
                    show={formData.show}
                    variant={formData.variant}
                    className={`rounded-0 co_alert ${formData.show ? 'd-block' : 'd-none'}`}
                    onClose={() => setFormData({show: false, alertMessage: "", variant: "", email: "", name: "", message: "", loading: false})}
                    dismissible
                >
                  <p className="my-0">{formData.alertMessage}</p>
                </Alert>
              </div>


              <div className="split-section">
                <form id="contact__form" onSubmit={handleSubmit} className="contact__form w-100">
                  <div>
                    <input
                        autoComplete="on"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder={t("name")}
                        value={formData.name || ''}
                        type="text"
                        required
                        onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                        autoComplete="on"
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder={t("email")}
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
                      // placeholder={t("message")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                  />
                  <br/>
                  <div className="form-group">
                    <button className="btn ac_btn" type="submit" disabled={formData.loading}>
                      {formData.loading ? 'Sending...' : t('send')}
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
});
