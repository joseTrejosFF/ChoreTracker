import { ChoreStateType } from '../chore/types'

export interface UserCtxInterface {
  userName: string,
  isDarkTheme: boolean,
  searchTerm: string,
  currentSearch: ChoreStateType[] | null,
  actions: {
    getSearchResults: (searchString: string, chores: ChoreStateType[]) => void,
    clearSearchResults: () => void,
    toggleDarkTheme: (flag:boolean) => void
  }
}

export interface UserStateInterface {
  userName: string,
  isDarkTheme: boolean,
  searchTerm: string,
  currentSearch: ChoreStateType[] | null,
}

export type ACTION_TYPE = 
  | {type: 'CURRENT_SEARCH', payload: { searchString: string, chores: ChoreStateType[]  }}
  | {type: 'CLEAR_SEARCH_RESULTS' }
  | {type: 'TOGGLE_DARK_THEME', payload: {flag: boolean} }

