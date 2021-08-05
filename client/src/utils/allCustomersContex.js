
// import React, { createContext, useState, useEffect } from "react";
// import api from './api'

// export const AllCustomersContext = createContext();

// // This context provider is passed to any component requiring the context
// export const AllCustomersProvider = ({ children }) => {
//   const [allCustomerslist, setAllCustomersList] = useState( [] );

//   useEffect(() => {
//   api.getCustomers()
//   .then(res => {
//     console.log(res.data)
//   setAllCustomersList(res.data)
//   })
// }, [])
//   console.log(allCustomerslist)
// //   const [location, setLocation] = useState("Mars");

//   return (
//     <AllCustomersContext.Provider
//       value={{
//         allCustomerslist,
//         setAllCustomersList,
//       }}
//     >
//       {children}
//     </AllCustomersContext.Provider>
//   );
// };
