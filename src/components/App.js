import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from "../reducers"
import EventForm from "./EventForm"
import EventList from "./EventList" 
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog';

const APP_KIY = "appWithRedux";

export const App = () => {
  const appState = localStorage.getItem(APP_KIY);

  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KIY , JSON.stringify(state));
  }, [state])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm/>
        <EventList/>
        <OperationLog />
      </div>
    </AppContext.Provider>
  );
}

export default App;
