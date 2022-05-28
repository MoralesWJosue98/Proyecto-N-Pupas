import React, { useContext, createContext, useState, useMemo } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [branchID, setBranchID] = useState(null);

  const values = useMemo(
    () => ({
      branchID,
      setBranchID,
    }),
    [branchID]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('An error has occurred');
  }
  return context;
}

export default useAppContext;
