import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './DataLayer/StateProvider';
import { initialState, reducer } from './DataLayer/Reducer';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialstate={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


