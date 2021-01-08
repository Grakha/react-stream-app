import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-dark">
            <ul className="navbar-nav w-100 justify-content-between">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-dark" >Streamer</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link text-dark">All Streams</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Header;