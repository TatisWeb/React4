import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Post.module.css';

const Navbar = () => { 
return(
 <div> 
 <nav className="nav">
  
  
  <div> <NavLink to="/Dialogs" activeClassName={s.active}> Profile </NavLink> </div>
  <div> <NavLink to="/Post"    activeClassName={s.active}> Messages </NavLink></div> 
  <div> <NavLink to="/Profile" activeClassName={s.active}> News </NavLink> </div>
  <div> <NavLink to="/Profile" activeClassName={s.active}> Music </NavLink> </div>
  <div> <NavLink to="/Content" activeClassName={s.active}> Settings </NavLink> </div>
  
  </nav> 
  </div>
  );
  
  };
   
    export default Navbar;