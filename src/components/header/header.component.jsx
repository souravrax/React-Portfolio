import React from 'react'
import "./header.styles.scss";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/projects">Projects</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
            <div className="social-links">
                <a href="http://facebook.com/sourav.rakshit.1234" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                <a href="http://github.com/souravrax" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/souravrax/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            </div>
        </div>
    )
}
