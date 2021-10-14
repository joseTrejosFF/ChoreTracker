import * as React from "react";
import userReducer from "./userReducer";
import { UserCtxInterface } from "./types";
import { ChoreStateType } from "../chore/types";

export const UserContext = React.createContext({} as UserCtxInterface);

UserContext.displayName = "User.Context";

type Props = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const initialState = {
    userName: "John",
    isDarkTheme: true,
    searchTerm: "",
    currentSearch: null,
  };

  const [state, dispatch] = React.useReducer(userReducer, initialState);

  // All actions
  const getSearchResults = (searchString: string, chores: ChoreStateType[]) => {
    // console.log('Getting Search results');
    dispatch({
      type: "CURRENT_SEARCH",
      payload: { searchString, chores },
    });
  };

  // Clear Results
  const clearSearchResults = () => {
    dispatch({
      type: "CLEAR_SEARCH_RESULTS",
    });
  };

  const toggleDarkTheme = (flag: boolean = true) => {
    localStorage.setItem("theme", flag ? "dark" : "light");
    dispatch({
      type: "TOGGLE_DARK_THEME",
      payload: { flag },
    });
  };

  return (
    <UserContext.Provider
      value={{
        userName: state.userName,
        isDarkTheme: state.isDarkTheme,
        searchTerm: state.searchTerm,
        currentSearch: state.currentSearch,
        actions: {
          getSearchResults,
          clearSearchResults,
          toggleDarkTheme,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
