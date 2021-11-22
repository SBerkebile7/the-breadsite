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
                                        Home                
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="text-decoration-none">
                                        Posts
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-decoration-none">
                                        Contact
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