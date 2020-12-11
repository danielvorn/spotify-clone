import React from 'react';
import { createContext, useContext, useReducer } from 'react'

const StateContext = createContext();

export const StateProvider = ({ initialstate, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialstate)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
