// @flow

import React from "react";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { ContactUs } from "./pages/contact";
import { Projects } from "./pages/projects";

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
