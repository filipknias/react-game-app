import React, { useState, createContext } from 'react';
import initialShips from '../ships';

export const ShipsContext = createContext();

const ShipsContextProvider = ({ children }) => {
  const [ships, setShips] = useState(initialShips);
  return (
    <ShipsContext.Provider value={[ships, setShips]}>
      {children}
    </ShipsContext.Provider>
  )
}

export default ShipsContextProvider