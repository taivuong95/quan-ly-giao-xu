import React, { useContext, createContext, useReducer } from 'react';

const gxContext = createContext();

export const GXProvider = ({ reducer, initialState, children }) => {
  return (
    <gxContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </gxContext.Provider>
  );
};

export const useChromaValue = () => useContext(gxContext);
