import React from 'react';
import { NavLink } from 'react-router-dom';
import BackButton from './BackButton';

const NavBar = () => {
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/search">Search</NavLink>
            <BackButton />
            
        </nav>
    );
}

export default NavBar;
