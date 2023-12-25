import React from "react";
import { Home } from "./components/pages/home/home";
import { About } from "./components/pages/about/about";
import { ContactUs } from "./components/pages/contact/contact";
import { Projects } from "./components/pages/projects/projects";

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
