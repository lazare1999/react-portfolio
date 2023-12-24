import React from "react";
import { Home } from "./components/pages/home/home";
import { Projects } from "./components/pages/projects/projects";
import { ContactUs } from "./components/pages/contact/contact";
import { About } from "./components/pages/about/about";

function AppRoutes() {
  return (
    <div className="s_c">
      <Home />
      <About />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default AppRoutes;
