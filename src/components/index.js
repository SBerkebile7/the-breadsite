import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="wrap">
            <header id="header">
                <div class="container-fluid">
                    <div class="col-md-12">
                        <button id="primary-nav-button" type="button">Menu</button>
                        <nav id="primary-nav" class="dropdown cf">
                            <ul class="dropdown menu">
                                <li>
                                    <Link to="/" className="text-decoration-none">
                                        About me                
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="text-decoration-none">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-decoration-none">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume" className="text-decoration-none">
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;