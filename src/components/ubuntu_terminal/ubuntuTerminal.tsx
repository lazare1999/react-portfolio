// @flow

import { NavigationBar } from "./navigationBar";
import { Body } from "./body";
import React, {useRef} from "react";

const config = {
  name: "Lazare",
  computerName: "portfolio"
};

/** The Ubuntu Terminal component */
export const UbuntuTerminal = () => {
  const ubuntuRef = useRef<any>();

  return (
    <div className="ubuntu" ref={ubuntuRef}>
      <NavigationBar
        config={config}
      />
      <Body config={config}/>
    </div>
  );
};
