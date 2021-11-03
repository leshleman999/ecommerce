//setting up data layer of global variables to track the basket 
import React, { createContext, useContext, useReducer } from 'react';

//data layer
export const StateContext = createContext();

//build a Provider (wrapper) to give access to entire app
export const StateProvider = ({ reducer, initialState, children} ) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


//This is how we use it in a component
export const useStateValue = () => useContext(StateContext)