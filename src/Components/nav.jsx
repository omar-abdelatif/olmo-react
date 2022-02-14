import React from 'react';
import { NavLink, Link } from 'react-router-dom';
function NAV() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('fixed');
        } else {
            document.querySelector('.navbar').classList.remove('fixed');
        }
    })
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/olmo-react">OLMO</Link>
                    <button className="btn btn-primary menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <Link to='omlo'>OMLO</Link>
                        </div>
                        <div class="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/olmo-react">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/feature">Features</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/faqs">FAQS</NavLink>
                                </li>
                            </ul>
                            <button className="btn btn-primary">Let's Started</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default NAV;
