import React, { createContext, useState } from "react";

export const CurrCustContext = createContext();

// This context provider is passed to any component requiring the context
export const CurrCustProvider = ({ children }) => {
  const [ currCust, setCurrCust ] = useState( {} );
  const [ currJob, setCurrJob ] = useState( {} )
  console.log(currCust)
  console.log(currJob)
//   const [location, setLocation] = useState("Mars");

  return (
    <CurrCustContext.Provider
      value={{
        currCust,
        setCurrCust,
        currJob,
        setCurrJob
      }}
    >
      {children}
    </CurrCustContext.Provider>
  );
};





