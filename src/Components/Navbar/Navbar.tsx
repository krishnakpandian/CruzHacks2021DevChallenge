import React from 'react';
import './Navbar.scss';
import { Link, useLocation } from "react-router-dom";

// Renders the Navbar
const Navbar: React.FC = () => {
    const location = useLocation()
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-title">
                    CruzHacks 2021
                </div>
                <div className="navbar-route">
                    {location.pathname !== "/analytics" ?
                        <Link to="/analytics">Analytics</Link>
                        :
                        <Link to="/">Home</Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;