// @flow

import { UbuntuTerminal } from "./ubuntuTerminal";
import React, {useRef} from "react";

export const UbuntuApplication =  () => {
    const appRef = useRef(null);

    return (
        <div ref={appRef}>
            {/** Renders an Ubuntu Terminal component */}
            <UbuntuTerminal/>
        </div>
    );
};
