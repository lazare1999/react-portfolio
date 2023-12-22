import React from "react";
import { Home } from "./pages/home/home";
import { Portfolio } from "./pages/portfolio/portfolio";
import { ContactUs } from "./pages/contact/contact";
import { About } from "./pages/about/about";

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
