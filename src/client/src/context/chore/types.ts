export interface ChoreContextType {
  chores: ChoreStateType[],
  actions: {
    createChore: (choreName:string) => void,
    getAllChores: () => void,
    clearLatest: (id:string, startTime:string, endTime:string) => void ,
    setStartTime: (id:string, time:string) => void,
    setStopTime: (id:string, time:string) => void,
    toggleIsMouseIn: (id:string, flag:boolean) => void,
    renameChore: (id:string, choreName:string) => void,
    toggleBtnPin: (id:string) => void,
    deleteChore: (id:string) => void,
  }
}

export interface ChoreServerResType {
  _id: string,
  cardColor?: string,
  isPinned: boolean,
  choreName: string,   
  durations?: DurationType[]  
}

export interface DurationType  {
  _id: string,
  duration: string,
  started: string,
  ended: string,
}

export interface ChoreLocalStateType {  
  isRename: boolean, 
  isMouseIn: boolean,
  latest: {
    start?: string | null,
    end?: string | null,
    isActive: boolean
  },
}

export type ChoreStateType = ChoreServerResType & ChoreLocalStateType;


export type ACTION_TYPE = 
  | {type: 'CREATE_CHORE', payload: ChoreServerResType }
  | {type: 'GET_ALL_CHORES', payload: ChoreServerResType[] }
  | {type: 'ADD_DURATION', payload: {id: string, choreUpdated: ChoreStateType } }
  | {type: 'SET_START_TIME', payload: { id:string, time:string } }
  | {type: 'SET_STOP_TIME', payload: { id:string, time:string } }
  | {type: 'TOGGLE_MOUSE_IN', payload: {id:string, flag:boolean} }
  | {type: 'RENAME_CHORE', payload: ChoreServerResType }
  | {type: 'PIN_CHORE', payload: {id:string} }
  | {type: 'DELETE_CHORE', payload: {id:string} }
