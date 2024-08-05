import React, { createContext, useContext } from 'react';

const FormatContext = createContext();

export const useFormat = () => useContext(FormatContext);

export const FormatProvider = ({ children }) => {

  const formatTimeFunction = (isoDateString) => {
    const date = new Date(isoDateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');

    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  // values
  const values = {
    formatTimeFunction
  }


  return (
    <FormatContext.Provider value={values}>
      {children}
    </FormatContext.Provider>
  );
};