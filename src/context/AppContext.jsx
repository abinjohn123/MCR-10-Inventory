import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const contextValue = {};
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
