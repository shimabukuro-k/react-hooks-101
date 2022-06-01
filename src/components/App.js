import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from "../reducers"
import EventForm from "./EventForm"
import EventList from "./EventList" 
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog';

export const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

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
