import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="wrap">
            <header id="header">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-sm navbar-light bg-light" id="navbar" >
                        <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
                            <div class="collapse navbar-collapse text-center">
                                <ul class="navbar-nav ">
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
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;