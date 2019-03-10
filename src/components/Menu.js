import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: '#20a19c',
    fontSize: '2rem'
  }

  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>HOME</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>ABOUT</NavLink></li>
        <li><NavLink to="/about/react" activeStyle={activeStyle}>ABOUT React</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu;