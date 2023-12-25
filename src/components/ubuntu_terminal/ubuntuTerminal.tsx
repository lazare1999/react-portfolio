import { NavigationBar } from "./navigationBar";
import { Body } from "./body";
import React, {useRef, useState} from "react";

const config = {
  name: "Lazare",
  computerName: "portfolio"
};

/** The Ubuntu Terminal component */
export const UbuntuTerminal = () => {
  const ubuntuRef = useRef<any>();
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);

  /** Performs the drag functionality of the terminal */
  const drag = (event: any) => {
    ubuntuRef.current.style.transition = "none";
    // Get the current position of the target
    const { target, clientX, clientY } = event;
    const { offsetTop, offsetLeft } = target;
    const { left, top } = ubuntuRef.current.getBoundingClientRect();

    // Determine the new drag points
    let dragStartLeft = left - offsetLeft;
    let dragStartTop = top - offsetTop;
    let dragStartX = clientX;
    let dragStartY = clientY;

    /** Modify position of the element when drag starts */
    const beginDrag = ({clientX, clientY}: {clientX: number, clientY: number}) => {
      const newX = dragStartLeft + clientX - dragStartX;
      const newY = dragStartTop + clientY - dragStartY;

      // Constrain the new drag positions to the window size
      if (
        newX > 0 &&
        newX < window.innerWidth - 600 &&
        (newY > 0 && newY < window.innerHeight - 300)
      ) {
        ubuntuRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
    };

    /** Remove event listeners when dragging should stop */
    const stopDrag = () => {
      window.removeEventListener("mousemove", beginDrag, true);
      window.removeEventListener("mouseup", stopDrag, true);
    };

    window.addEventListener("mousemove", beginDrag, true);
    window.addEventListener("mouseup", stopDrag, true);
  };

  /** Handles maximizing the terminal when not maximied */
  const maximize = () => {
    ubuntuRef.current.style.minHeight = `15em`;
    ubuntuRef.current.style.height = `15em`;
    ubuntuRef.current.style.width = `100%`;

    ubuntuRef.current.style.transform = `translate(0px, 0px)`;
    ubuntuRef.current.style.transition = `height 0.2s ease-in, width 0.2s ease-in, transform 0.2s ease-in`;
    setMaximized(true);
  };

  /** Resets the maximized terminal to normal seize */
  const resetMaximize = () => {
    ubuntuRef.current.style.maxHeight = `7em`;
    ubuntuRef.current.style.height = `7em`;
    ubuntuRef.current.style.width = `50%`;
    ubuntuRef.current.style.transition = `height 0.2s ease-in, width 0.2s ease-in, transform 0.2s ease-in`;
    ubuntuRef.current.style.transform = `translate(0px, 0px)`;

    setMaximized(false);

    // If the terminal was minimized prior, reset the state of it
    if (minimized) setMinimized(false);
  };

  return (
    <div className="ubuntu" ref={ubuntuRef}>
      <NavigationBar
        drag={drag}
        maximize={maximize}
        resetMaximize={resetMaximize}
        maximized={maximized}
        config={config}
      />
      <Body config={config}/>
    </div>
  );
};
