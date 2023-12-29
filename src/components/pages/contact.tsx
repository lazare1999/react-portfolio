// @flow

import React, {useEffect, useState} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Alert } from "react-bootstrap";
import {contactConfig} from "../contentOption";
import {useTranslation} from "react-i18next";

declare namespace Email {
    interface EmailData {
        SecureToken: any;
        Host: any;
        Username: string;
        Password: any;
        To: any;
        From: any;
        Subject: any;
        Body: any;
        Port: number;
    }

    function send(email: EmailData): Promise<string>;
}

export const ContactUs = React.memo(() => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      Email.send({
          SecureToken: process.env.REACT_APP_SECURE_TOKEN,
          Host: process.env.REACT_APP_SECURE_HOST,
          Username: contactConfig.YOUR_EMAIL,
          Password: process.env.REACT_APP_EMAIL_PASSWORD,
          To: contactConfig.YOUR_EMAIL,
          From: formData.email,
          Subject: formData.name,
          Body: formData.message,
          Port: 2525,
      }).then(
          message => setFormData({
              email: "",
              name: "",
              message: "",
              loading: false,
              alertMessage: message,
              variant: "",
              show: true,
          })
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
                      aria-label={t("message")}
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
