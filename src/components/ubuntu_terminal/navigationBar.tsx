import { faSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faBars,
  faMinus,
  faTimes,
  faPlus,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    config: { name: string; computerName: string };
}

/** Navigation bar for the Ubuntu terminal */
export const NavigationBar = (props: props) => {
  const {
    config
  } = props;

  const { name, computerName } = config;

  return (
    <div className="ubuntu__navigation-bar">
      {/** Left side of the navigation bar */}
      <div className="nb__left">
        <FontAwesomeIcon
          icon={faPlus}
          size="sm"
          className="raised"
        />
      </div>

      {/** Center of the navigation bar */}
      <div className="nb__center">{`${name}@${computerName}:~`}</div>

      {/** Right side of the navigation bar */}
      <div className="nb__right">
        <FontAwesomeIcon icon={faSearch} size="sm" className="raised" />
        <FontAwesomeIcon icon={faBars} size="sm" className="raised" />
        <FontAwesomeIcon
          icon={faMinus}
          size="sm"
          className="min"
        />
        <div>
            <FontAwesomeIcon
                icon={faSquare}
                size="sm"
                className="max-square"
            />
        </div>

        {/** Stacked FontAwesome icons for the "Close" button */}
        <span className="fa-stack custom">
          <FontAwesomeIcon
            icon={faCircle}
            size="xs"
            className="fa-stack-2x close"
          />
          <FontAwesomeIcon icon={faTimes} size="xs" className="fa-stack-1x" />
        </span>
      </div>
    </div>
  );
};
