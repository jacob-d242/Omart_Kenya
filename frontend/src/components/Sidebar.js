import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
      };
      const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
      };
    return (
    
        <div className="slider">
        <button onClick={openMenu}>&#9776;</button>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>
              x
            </button>
            <ul className="categories">
              <li>
                <Link to="/category/fashion">Fashion</Link>
              </li> 
  
              <li>
                <Link to="/category/kitchen">Kitchen</Link>
              </li>
              <li>
                <Link to="/category/gifts">Gifts</Link>
              </li>
  
              <li>
                <Link to="/category/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/category/bathroom">Bathroom</Link>
              </li>
              <li>
                <Link to="/category/Packaging">Packaging</Link>
              </li>
            </ul>
          </aside>
          <p>Welcome to Omart Kenya </p>
        </div>
    )
}
