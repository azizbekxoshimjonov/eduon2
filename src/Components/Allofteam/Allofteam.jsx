import React, { useState } from 'react'
import './Allofteam.css'
function Allofteam() {
    const [selectedFruit, setSelectedFruit] = useState('');

    const handleChange = (event) => {
        setSelectedFruit(event.target.value);
    }
    return (
        <div>
            <div className="container">
                <div className="navigation-bar">
                    <div>
                        <label htmlFor="fruits"></label>
                        <select id="fruits" value={selectedFruit} onChange={handleChange}>
                            <option value="">Yangi qo‘shilganlar</option>
                            {/* <option value="olma">Olma</option>
                            <option value="nok">Nok</option>
                            <option value="banan">Banan</option>
                            <option value="uzum">Uzum</option> */}
                        </select>
                        {selectedFruit && <p>Siz tanlagan meva: {selectedFruit}</p>}
                    </div>
                    <ul className='navigations'>
                        <li>
                            <a href="">Barchasi</a>
                        </li>
                        <li>
                            <a href="">Bepul</a>
                        </li>
                        <li>
                            <a href="">Zo‘rlari</a>
                        </li>
                        <li>
                            <a href="">Marketing</a>
                        </li>
                        <li>
                            <a href="">Dasturlash</a>
                        </li>
                        <li>
                            <a href="">Biznes</a>
                        </li>
                        <li>
                            <a href="">Diniy</a>
                        </li>
                        <li>
                            <a href="">Xorijiy tillar</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Allofteam
