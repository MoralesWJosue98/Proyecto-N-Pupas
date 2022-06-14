import React, { useContext, createContext, useState, useMemo } from 'react';

export const BranchContext = createContext(null);

export const BranchContextProvider = ({ children }) => {
  const [branchID, setBranchID] = useState(null);

  const values = useMemo(
    () => ({
      branchID,
      setBranchID,
    }),
    [branchID]
  );

  return <BranchContext.Provider value={values}>{children}</BranchContext.Provider>;
};

export function useBranchContext() {
  const context = useContext(BranchContext);

  if (!context) {
    console.error('An error has occurred');
  }
  return context;
}

export default useBranchContext;
