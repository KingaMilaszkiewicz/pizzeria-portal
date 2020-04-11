import React from 'react';
import {NavLink} from 'react-router-dom';

const PageNav = ({ props }) => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`}>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`}>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/ordering`}>Ordering</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`}>Kitchen</NavLink>
  </nav>
);


export default PageNav;
