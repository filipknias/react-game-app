import React, { useState, useEffect, useContext } from 'react';
import './Appbar.css';
import { ShipsContext } from '../../context/ShipsContextProvider';
import initialShips from '../../ships';

const Appbar = () => {
  const [ships, setShips] = useContext(ShipsContext);

  const [systems, setSystems] = useState([
    { id: 1, label: 'Vega', checked: false },
    { id: 2, label: 'Antares', checked: false },
    { id: 3, label: 'Gemini', checked: false },
    { id: 4, label: 'Mizar', checked: false },
    { id: 5, label: 'Sol', checked: false },
    { id: 6, label: 'Draconis', checked: false },
    { id: 7, label: 'Sirius', checked: false },
    { id: 8, label: 'Tau Ceti', checked: false },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: 'Storm', checked: false, color: '#FD01F1' },
    { id: 2, name: 'Tank', checked: false, color: '#FC7F01' },
    { id: 3, name: 'Engineer', checked: false, color: '#01FD23' },
    { id: 4, name: 'Raider', checked: false, color: '#D8D8D8' },
    { id: 5, name: 'Shock', checked: false, color: '#B8CCE4' },
    { id: 6, name: 'Sniper', checked: false, color: '#FCD5B4' },
    { id: 7, name: 'Defender', checked: false, color: '#C2AD85' },
    { id: 8, name: 'Hybrid', checked: false, color: '#D7AEF1' },
    { id: 9, name: 'Clan', checked: false, color: '#D8D8D8' },
  ]);

  const handleSystemChange = (id) => {
    setSystems((prevSystems) => {
      return prevSystems.map((system) => {
        if (id === system.id) return { ...system, checked: !system.checked };
        else return system;
      });
    });
  };

  const handleCategoryChange = (id) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (id === category.id) return { ...category, checked: !category.checked };
        else return category;
      });
    });
  };

  useEffect(() => {
    const checkedSystems = systems.filter(({ checked }) => checked === true);
    const checkedCategories = categories.filter(({ checked }) => checked === true);
    if (checkedSystems.length > 0 && checkedCategories.length > 0) {
      // Checked systems and categories
      const filteredShips = initialShips.filter((ship) => {
        return checkedSystems.some((system) => ship.system === system.label) && checkedCategories.some((category) => ship.category === category.name);
      });
      setShips(filteredShips);
    } else if (checkedSystems.length > 0 && checkedCategories.length === 0) {
      // Checked systems
      const systemShips = initialShips.filter((ship) => {
        return checkedSystems.some((system) => ship.system === system.label);
      });
      setShips(systemShips);
    } else if (checkedCategories.length > 0 && checkedSystems.length === 0) {
      // Checked categoires
      const categoriesShips = initialShips.filter((ship) => {
        return checkedCategories.some((category) => ship.category === category.name);
      });
      setShips(categoriesShips);
    } else if (checkedCategories.length === 0 && checkedSystems.length === 0) {
      // Display all ships
      setShips(initialShips);
    }
  }, [systems, categories]);

  return (
    <div className="appbar">
      <div className="appbarContainer">
        <h1 className="containerHeader">Systems</h1>
        <div className="containerSystemsGrid">
          {systems.map(({ id, label, checked }) => (
            <div className="systemCheckboxContainer" key={id}>
              <label htmlFor={id} className="systemLabel">{label}</label>
              <input 
                type="checkbox" 
                id={id} 
                checked={checked} 
                className="systemCheckbox"
                onChange={() => handleSystemChange(id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="appbarContainer">
        <h1 className="containerHeader">Category</h1>
        <div className="containerCategoriesGrid">
          {categories.map(({ id, name, checked, color }) => (
            <div className="categoryCheckboxContainer" key={id} style={{ color, borderColor: color }}>
              <label class="checkboxContainer">
                {name}
                <input type="checkbox" checked={checked} onChange={() => handleCategoryChange(id)} />
                <span class="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Appbar