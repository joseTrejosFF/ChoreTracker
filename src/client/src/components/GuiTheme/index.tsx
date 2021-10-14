import { useContext, useEffect } from "react";
import Button from "shared/Button";
import { UserContext } from "context/user/UserContext";
import "./style.css";

type Props = {
  isMobileVersion?: boolean;
};

const GuiTheme = ({ isMobileVersion = false }: Props) => {
  const userContext = useContext(UserContext);
  const { isDarkTheme, actions } = userContext;
  const { toggleDarkTheme } = actions;

  const onClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    flag: boolean
  ) => {
    toggleDarkTheme(flag);
  };

  useEffect(() => {
    localStorage.getItem("theme") === "light" && toggleDarkTheme(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkTheme]);

  return (
    <div className="theme-selector">
      {isDarkTheme ? (
        <Button
          value={
            isMobileVersion ? (
              <p>Enable Light Mode</p>
            ) : (
              <i className="fas fa-sun" />
            )
          }
          // value={<p>Light Mode</p>}
          className="btn-light-mode"
          onClick={(e) => onClick(e, false)}
          isVisible={true}
          tooltiptext="Light Mode"
        />
      ) : (
        <Button
          value={
            isMobileVersion ? (
              <p>Enable Dark Mode</p>
            ) : (
              <i className="fas fa-moon" />
            )
          }
          className="btn-dark-mode"
          onClick={(e) => onClick(e, true)}
          isVisible={true}
          tooltiptext="Dark Mode"
        />
      )}
    </div>
  );
};

export default GuiTheme;
