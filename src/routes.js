import React from "react";
import { Home } from "./components/pages/home/home";
import { Portfolio } from "./components/pages/portfolio/portfolio";
import { ContactUs } from "./components/pages/contact/contact";
import { About } from "./components/pages/about/about";

function AppRoutes() {
  return (
    <div className="s_c">
      <Home />
      <About />
      <Portfolio />
      <ContactUs />
    </div>
  );
}

export default AppRoutes;
