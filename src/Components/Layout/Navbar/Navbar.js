import React from 'react'
import "./Navbar.css"
import logo from "../../images/logo.png"
import { Link } from 'gatsby'

function Navbar() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img src={logo} alt="unicorn logo" className="logo" />
                    <div className="headingDiv">
                        <h1 className="navbarHeading">Operation Unicorn</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/readingmaterial/">Reading Material</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
