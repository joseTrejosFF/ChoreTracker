import TabSelector from "../../components/TabSelector";
import SearchCard from "components/SearchCard";
import AddNewCard from "components/AddNewCard";
import GuiTheme from "components/GuiTheme";
import "./style.css";
import { UserContext } from "context/user/UserContext";
import { ChoreContext } from "context/chore/ChoreContext";

import { useContext, useEffect, useState } from "react";
import Button from "shared/Button";

const Navbar = ({ title = "Chore Tracker" }) => {
  const choreContext = useContext(ChoreContext);

  useEffect(() => {
    choreContext.actions.getAllChores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userContext = useContext(UserContext);
  const { isDarkTheme } = userContext;

  const [isShowMobileNav, SetIsShowNavbar] = useState(false);

  const ToggleMobileNavbar = () => {
    console.log("isShowMobileNav: ", isShowMobileNav);
    SetIsShowNavbar(!isShowMobileNav);
  };

  return (
    <>
      <nav className={`navbar ${!isDarkTheme && "light"}`}>
        <div className="navbar-items">
          <div>
            <i className="fas fa-stopwatch "></i>
            <h1 className="main-title">{title}</h1>
          </div>
          <TabSelector />
          <SearchCard />
          <AddNewCard />
          <GuiTheme />
        </div>

        <div className="mobile-menu-container">
          <div className="gui-theme">
            <GuiTheme />
          </div>

          <div className="tab-selector">
            <TabSelector />
          </div>

          <div className="mobile-menu">
            <Button
              className="btn-mobile-menu"
              value={<i className="fas fa-bars" />}
              onClick={ToggleMobileNavbar}
            />
          </div>
        </div>
        {isShowMobileNav && (
          <div className="menu-items">
            <SearchCard />
            <AddNewCard />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
