import React, { useState } from 'react';
import logo from '../../Assets/Img/logo.svg';
import loopa from '../../Assets/Img/loopa.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css';

function Header() {
  const [language, setLanguage] = useState('uz');
  const [activeLink, setActiveLink] = useState('home');

  const texts = {
    uz: {
      home: 'Bosh sahifa',
      courses: 'Kurslar',
      faq: 'FAQ',
      about: 'Biz haqimizda',
      languages: 'O\'z',
    },
    ru: {
      home: 'Главная',
      courses: 'Курсы',
      faq: 'Вопросы',
      about: 'О нас',
      languages: 'Рус',
    },
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="container">
        <header>
          <nav className='nav__item'>
            <ul className='nav__list1'>
              <li>
                <img className='logo' src={logo} alt="Logo" />
              </li>
            </ul>
            <ul className='nav__list'>
              <li className='nav__nav'>
                <a
                  href="#"
                  className={activeLink === 'home' ? 'active' : ''}
                  onClick={() => handleActiveLink('home')}
                >
                  {texts[language].home}
                </a>
              </li>
              <li className='nav__nav'>
                <a
                  href="#"
                  className={activeLink === 'courses' ? 'active' : ''}
                  onClick={() => handleActiveLink('courses')}
                >
                  {texts[language].courses}
                </a>
              </li>
              <li className='nav__nav'>
                <a
                  href="#"
                  className={activeLink === 'faq' ? 'active' : ''}
                  onClick={() => handleActiveLink('faq')}
                >
                  {texts[language].faq}
                </a>
              </li>
              <li className='nav__nav'>
                <a
                  href="#"
                  className={activeLink === 'about' ? 'active' : ''}
                  onClick={() => handleActiveLink('about')}
                >
                  {texts[language].about}
                </a>
              </li>
              <li className='nav__nav'>
                <img src={loopa} alt="Search" />
              </li>
              <li className='nav__nav2'>
                <Accordion style={{ height: '0px', width: '0px' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{texts[language].languages}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <button className='uzb' onClick={() => handleLanguageChange('uz')}>O'z</button>
                      <button className='rus' onClick={() => handleLanguageChange('ru')}>Рус</button>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </li>
            </ul>
            <button className='kirish__btn'>Kirish</button>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
