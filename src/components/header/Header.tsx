import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../sidebar/SidebarData';

import './Header.css';
import '../sidebar/Navbar.css';

import logoSeazonewhite from "../../images/seazone-logo-white.png";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'; 
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';

export default function Header() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    return (
      <header className="header">
        
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>

        <div className="header__logo">
            <Link to={'/'}>
              <img src={logoSeazonewhite} className="header_img" alt="logo"/>
            </Link>
        </div>

        <div className="header__navbar">
          <nav>
            <ul className="header__links-list">
                <li className="navbar__item"><Link to={'/calendario'} className="navbar__link"><strong><h4>calendário</h4></strong></Link></li>
                <li className="navbar__item"><Link to={'/clientes'} className="navbar__link"><strong><h4>clientes</h4></strong></Link></li>
                <li className="navbar__item"><Link to={'/orcamentos'} className="navbar__link"><strong><h4>orçamentos</h4></strong></Link></li>
                <li className="navbar__item"><Link to={'/'} className="navbar__link"><strong><h4>propriedades</h4></strong></Link></li>
                <li className="navbar__item"><Link to={'/calendario'} className="navbar__link"><strong><h4>controle</h4></strong></Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="header__user">
          <AccountCircleRoundedIcon style={{fontSize: 40, color: 'white'}}/>
        </div>

        <div onClick={showSidebar} className="header_options-menu"> 
              <DehazeRoundedIcon  style={{fontSize: 40, color: 'white'}}/>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
     
      </header>
    );
}