// @flow

import { PlusSquare, Search, Menu, Minus, Square, X} from "react-feather";
import React from "react";

interface props {
    config: { name: string; computerName: string };
}

/** Navigation bar for the Ubuntu terminal */
export const NavigationBar= React.memo((props: props) => {
  const {
    config
  } = props;

  const { name, computerName } = config;

  return (
    <div className="ubuntu__navigation-bar">
      <div className="nb__left">
        <PlusSquare className="raised"/>
      </div>

      <div className="nb__center">{`${name}@${computerName}:~`}</div>

      <div className="nb__right">
        <Search className="raised" />
        <Menu className="raised" />
        <Minus className="min"/>
        <div>
            <Square className="max-square"/>
        </div>
        <span>
          <X className="close"/>
        </span>
      </div>
    </div>
  );
});
