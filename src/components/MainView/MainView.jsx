import React, { useState, useContext, useEffect } from 'react';
import './MainView.css';
import LoopIcon from '../../assets/loop.svg';
import Card from '../Card/Card';
import { ShipsContext } from '../../context/ShipsContextProvider';
import initialShips from '../../ships';

const MainView = () => {
  const [ships, setShips] = useContext(ShipsContext);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText === '') setShips(initialShips);
    else {
      const searchShips = initialShips.filter((ship) => {
        const nameToLower = ship.name.toLowerCase();
        const searchToLower = searchText.toLowerCase();
        return nameToLower.includes(searchToLower);
      });
      setShips(searchShips);
    }
  }, [searchText]);

  return (
    <>
      <div className="inputContainer">
        <input 
          type="text" 
          className="searchInput" 
          placeholder="Type to search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} 
        />
        <button className="searchSubmit">
          <img src={LoopIcon} alt="loop-icon" />
        </button>
      </div>
      <div className="shipsGrid">
        {ships.map((ship) => (
          <Card key={ship.name} {...ship} />
        ))}
      </div>
    </>
  )
}

export default MainView;