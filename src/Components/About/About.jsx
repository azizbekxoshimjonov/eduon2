import React, { useState } from 'react';
import './About.css';
import Switch from '@mui/material/Switch';
import chiziq from '../../Assets/Img/markazichiziq.png'


function About() {
  const [checked, setChecked] = useState(true); 
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const handleSwitchChange = (event) => {
    setChecked(event.target.checked); 
  };

  return (
    <div>
      <div className="container">
        <h1 className='oqitish'>Xush kelibsiz</h1>
        <h2 className='plat__des'>ilm izlanuvchi</h2>
        <p className='kelajal__des'>Xo‘sh bugun qanday bilimlar o‘rganamiz?</p>
        <div className='button__btn'>
          <p style={{ color: checked ? 'blue' : 'black' }}>Bo‘limlar bo‘yicha</p>
          <Switch
            {...label}
            checked={checked}
            onChange={handleSwitchChange} 
            className="reverse-switch"
          />
          <p style={{ color: !checked ? 'blue' : 'black' }}>Ustozlar bo‘yicha</p>
        </div>
        <img src={chiziq} alt="" />
      </div>
    </div>
  );
}

export default About;
