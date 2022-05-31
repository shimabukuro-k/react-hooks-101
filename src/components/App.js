import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from "../reducers/index"
import EventForm from "./EventForm"
import EventList from "./EventList" 
import AppContext from '../contexts/AppContext';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={"aaa"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <EventList state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
