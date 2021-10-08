import { UserStateInterface, ACTION_TYPE } from './types';


export default function userReducer (
  state: UserStateInterface, 
  action: ACTION_TYPE
) 
  {
  switch (action.type) {
    case 'CURRENT_SEARCH':
      return {
        ...state,
        searchTerm: action.payload.searchString,
        currentSearch: [...action.payload.chores].filter((chore) => {
          const regex = new RegExp(action.payload.searchString, 'gi');
          return chore.choreName.match(regex);
        }),
      };

    case 'CLEAR_SEARCH_RESULTS':
      return {
        ...state,
        searchTerm: '',
        currentSearch: null,
      };

    case 'TOGGLE_DARK_THEME':
      return {
        ...state,
        isDarkTheme: action.payload.flag,
      };

    default:
      return state;
  }
};
