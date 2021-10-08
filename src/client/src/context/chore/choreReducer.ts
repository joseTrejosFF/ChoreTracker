import {ChoreStateType, ACTION_TYPE } from './types'


export default function choreReducer (
  state: ChoreStateType[], 
  action: ACTION_TYPE
):ChoreStateType[] {
 
  switch (action.type) {

    case 'CREATE_CHORE':
      return [
        ...state,
        Object.assign(action.payload, {
          isRename: false,
          isMouseIn: false,
          latest: { isActive: false },
        }),
      ];

    case 'GET_ALL_CHORES':
      return action.payload.map((chore) =>
        Object.assign(chore, {
          isRename: false,
          isMouseIn: false,
          latest: { isActive: false },
        })
      );

    case 'ADD_DURATION':
      return [...state].map((chore) =>
        chore._id === action.payload.id
          ? {
              ...chore,
              latest: {
                start: null,
                end: null,
                isActive: false,
              },
              durations: action.payload.choreUpdated.durations,
            }
          : chore
      );

    case 'SET_START_TIME':
      return [...state].map((chore) =>
        chore._id === action.payload.id
          ? {
              ...chore,
              latest: {
                start: action.payload.time,
                end: null,
                isActive: true,
              },
            }
          : chore
      );

    case 'SET_STOP_TIME':
      return [...state].map((chore) =>
        chore._id === action.payload.id
          ? {
              ...chore,
              latest: {
                start: chore.latest.start,
                end: action.payload.time,
                isActive: false,
              },
            }
          : chore
      );

    case 'TOGGLE_MOUSE_IN':
      return [...state].map((chore) =>
        chore._id === action.payload.id
          ? {
              ...chore,
              isMouseIn: action.payload.flag,
            }
          : chore
      );

    case 'RENAME_CHORE':
      return [...state].map((chore) => {
        if (chore._id === action.payload._id) {
          return Object.assign(action.payload, {
            isRename: false,
            isMouseIn: false,
            latest: { isActive: false },
          });
        } else {
          return chore;
        }
      });

    case 'PIN_CHORE':
      return state.map((chore) => {
        if (chore._id === action.payload.id) {
          return {
            ...chore,
            isPinned: !chore.isPinned,
          };
        } else {
          return chore;
        }
      });

    case 'DELETE_CHORE':
      return [...state].filter((chore) => chore._id !== action.payload.id);

    default:
      return state;
  }
};

