import React from 'react';
import './Card.css';

const Card = ({ 
  mainIcon, 
  itemsIcons, 
  name, 
  nameIcon, 
  system, 
  price, 
  bedrooms, 
  baths, 
}) => {
  return (
    <div className="card">
      <div className="topSection">
        <img src={mainIcon} alt="" className="mainIcon" />
        <div className="iconsContainer">
          {itemsIcons.map((icon) => <img src={icon} key={icon} alt="item icon" className="icon" />)}
        </div>
      </div>
      <div className="mainSection">
        <div className="headerContainer">
          <h1 className="title">{name}</h1>
          <img src={nameIcon} alt="name icon" className="titleIcon" />
        </div>
        <ul className="shipInfoList">
          <li className="listItem">
            <p>Systems</p>
            <p>{system}</p>
          </li>
          <li className="listItem">
            <p>Price</p>
            <p>{price}</p>
          </li>
          <li className="listItem">
            <p>Bedrooms</p>
            <p>{bedrooms}</p>
          </li>
          <li className="listItem">
            <p>Baths</p>
            <p>{baths}</p>
          </li>
        </ul>
        <button className="detailsButton">View details</button>
      </div>
    </div>
  )
}

export default Card;