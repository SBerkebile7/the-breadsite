import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="wrap">
            <header id="header">
                <div class="container-fluid">
                    <div>
                        <nav id="primary-nav">
                            <ul class="dropdown menu">
                                <li>
                                    <Link to="/">
                                        Home                
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/posts">
                                        Posts
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" >
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