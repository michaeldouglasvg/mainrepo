import React, { createContext, useContext } from 'react';

const FetchApisContext = createContext();

export const useFetch = () => useContext(FetchApisContext);

export const FetchApisProvider = ({ children }) => {

  const customFetch = async (url, options = {}, token = null) => {
    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };
    if (token) {
      defaultOptions.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, defaultOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return null;
    }
  };

  const values = {
    customFetch
  }

  return (
    <FetchApisContext.Provider value={values}>
      {children}
    </FetchApisContext.Provider>
  );
};