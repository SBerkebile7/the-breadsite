import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="wrap">
            <header id="header">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-sm navbar-light bg-light" id="navbar">
                        <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
                            <div class="text-left">
                                <ul class="navbar-nav">
                                    <li class="mx-5 px-5">
                                        The Breadsite
                                    </li>
                                </ul>
                            </div>
                            <div class="collapse navbar-collapse text-center">
                                <ul class="navbar-nav">
                                    <li class="mx-3">
                                        <Link to="/" class="text-decoration-none">
                                            Home                
                                        </Link>
                                    </li>
                                    <li class="mx-3">
                                        <Link to="/posts" class="text-decoration-none">
                                            Posts
                                        </Link>
                                    </li>
                                    <li class="mx-3">
                                        <Link to="/contact" class="text-decoration-none">
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