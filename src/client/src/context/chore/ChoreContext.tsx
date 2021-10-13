import * as React from "react";
import choreReducer from "./choreReducer";
import getDuration from "../../utils/getDuration";
import axios from "axios";
import { ChoreContextType, DurationType, ChoreStateType } from "./types";

type Props = {
  children: React.ReactNode;
};

export const ChoreContext = React.createContext({} as ChoreContextType);
ChoreContext.displayName = "Chore.Context";

export const ChoreProvider = ({ children }: Props) => {
  const initialState: ChoreStateType[] = [];

  const [state, dispatch] = React.useReducer(choreReducer, initialState);

  // Create new Chore
  const createChore = async (choreName: string) => {
    console.log("New Chore created: ", choreName);

    try {
      const newChore = await axios.post("/api/chores", { choreName });
      dispatch({
        type: "CREATE_CHORE",
        payload: newChore.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Get all Chores form DB
  const getAllChores = async () => {
    try {
      const res = await axios.get("/api/chores");
      console.log("Chores from DB: ", res.data);

      dispatch({
        type: "GET_ALL_CHORES",
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Get Duration and move it to Durations array
  const clearLatest = async (
    id: string,
    startTime: string,
    endTime: string
  ) => {
    console.log("Cleared Latest on ID: ", id);

    const lastDuration: Omit<DurationType, "_id"> = {
      duration: getDuration(parseInt(startTime), parseInt(endTime)).toString(),
      started: startTime,
      ended: endTime,
    };

    try {
      const res = await axios.put(`/api/chores/${id}`, lastDuration);
      dispatch({
        type: "ADD_DURATION",
        payload: { id, choreUpdated: res.data },
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Set start Time
  const setStartTime = (id: string, time: string) => {
    console.log("Started Chore ID: ", id);
    dispatch({
      type: "SET_START_TIME",
      payload: { id, time },
    });
  };

  // Set Stop time
  const setStopTime = async (id: string, time: string) => {
    console.log("Stopped Chore ID: ", id);
    dispatch({
      type: "SET_STOP_TIME",
      payload: { id, time },
    });
  };

  // Toogle isMouseIn on chore-cards
  const toggleIsMouseIn = (id: string, flag: boolean) => {
    dispatch({
      type: "TOGGLE_MOUSE_IN",
      payload: { id, flag },
    });
  };

  // Rename a Chore
  const renameChore = async (id: string, choreName: string) => {
    const res = await axios.put(`/api/chores/rename/${id}`, { choreName });

    dispatch({
      type: "RENAME_CHORE",
      payload: res.data,
    });
  };

  // Pin Chore
  const toggleBtnPin = async (id: string) => {
    dispatch({
      type: "PIN_CHORE",
      payload: { id },
    });
    // send update to DB
    await axios.put(`/api/chores/pin/${id}`);
  };

  // Delete Chore
  const deleteChore = async (id: string) => {
    console.log("Deleted Chore ID: ", id);
    try {
      dispatch({
        type: "DELETE_CHORE",
        payload: { id },
      });
      await axios.delete(`/api/chores/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ChoreContext.Provider
      value={{
        chores: state,
        actions: {
          createChore,
          getAllChores,
          clearLatest,
          setStartTime,
          setStopTime,
          toggleIsMouseIn,
          renameChore,
          toggleBtnPin,
          deleteChore,
        },
      }}
    >
      {children}
    </ChoreContext.Provider>
  );
};
