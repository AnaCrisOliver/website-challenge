import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

export default function Navbar() {
	
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
			<div onClick={showSidebar} className='sidebar'>
				<Link to='#' className='menu-bars'>
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<h1 onClick={showSidebar}>hiiii</h1>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									<span className="title">{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
    </>
  );
}