import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo_white.png'

import '../styles/footer-style.css'

const Footer = () => (
    <div className="footer mt-4">
        <div>
            <Link to="/"><img src={logo}/></Link>
            <div className="address" style={{margin: "1em auto"}}>
                <p>LEO LEONHARD NACHLASS</p>
                <p>c/o Florian Leonhard</p>
                <p>Strasse 12</p>
                <p>12345 Stadt</p>
                <p>info@leoleonhard.de</p>
            </div>
            <div className="copyright visible-on-tablet">
                <p>Copyright © 2022 Leo Leonhard Nachlass.
                    <br/>
                    All rights reserved.
                    <br/>
                Build by <a style={{textDecoration: "none", color: "white"}}href="https://hannarosenfeld.com/">Hanna Rosenfeld.</a></p>
            </div>
        </div>
        <div style={{width: "70%"}}>
        <div className="d-flex footer-nav">
            <div className="footer-nav-item">
                <hr/>
                <Link to="/lebenslauf">LEBENSLAUF</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="/malerei">MALEREI</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="/grafik">GRAFIK</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="/publikationen">PUBLIKATIONEN</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="">IMPRESSUM</Link>
                <Link to="">DATENSCHUTZ</Link>
                <Link to="">PRESSE</Link>
                <Link to="">BILDNACHWEIS</Link>
                <hr/>
            </div>
        </div>
            <div className="copyright hidden-on-tablet">
                <p>Copyright © 2022 Leo Leonhard Nachlass. All rights reserved.
                <br/>Build by <a style={{textDecoration: "none", color: "white"}}href="https://hannarosenfeld.com/">Hanna Rosenfeld.</a></p>
                </div>
            </div>
    </div>
)

export default Footer
