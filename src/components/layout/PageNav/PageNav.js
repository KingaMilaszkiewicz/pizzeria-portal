import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const PageNav = ({ props }) => (
  <nav>
    <Button variant="contained" color="primary"><NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</NavLink></Button>
    <Button variant="contained" color="primary"><NavLink to={`${process.env.PUBLIC_URL}/login`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</NavLink></Button>
    <Button variant="contained" color="primary"><NavLink to={`${process.env.PUBLIC_URL}/tables`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Tables</NavLink></Button>
    <Button variant="contained" color="primary"><NavLink to={`${process.env.PUBLIC_URL}/ordering`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Ordering</NavLink></Button>
    <Button variant="contained" color="primary"><NavLink to={`${process.env.PUBLIC_URL}/kitchen`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Kitchen</NavLink></Button>
  </nav>
);


export default PageNav;
