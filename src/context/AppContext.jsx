import { createContext, useContext, useState } from 'react';
import { inventoryData, LOCAL_STORAGE_KEYS } from '../constants';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [inventory, setInventory] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.INVENTORY)) ??
      inventoryData
  );

  const setLocalStorageInventory = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.INVENTORY, JSON.stringify(data));
    setInventory(data);
  };

  const contextValue = { inventory, setInventory: setLocalStorageInventory };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
