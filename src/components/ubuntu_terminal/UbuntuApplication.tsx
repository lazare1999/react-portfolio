import "./styles.scss";
import { UbuntuTerminal } from "./ubuntuTerminal";
import React, {useEffect, useRef, useState} from "react";

interface props {
    index: number;
}

export const UbuntuApplication =  (props: props) => {
    const {index} = props;
    const appRef = useRef(null);
    const [terminals, updateTerminals] = useState([] as any[]);

    const addTerminal = () => {
        const newTerminals = [...terminals, <UbuntuTerminalFactory />];
        updateTerminals(newTerminals);
    };

    const removeTerminal = (indexToRemove: number) => {
        const copyTerminals = [...terminals];
        copyTerminals.splice(indexToRemove, 1);

        updateTerminals(copyTerminals);
    };

    const UbuntuTerminalFactory = () => (
        <UbuntuTerminal/>
    );


    useEffect(() => {
        const terminals = [<UbuntuTerminalFactory />];
        updateTerminals(terminals);
    }, []);

    return (
        <div ref={appRef}>
            {/** Renders an Ubuntu Terminal component */}
            <UbuntuTerminal/>
        </div>
    );
};
