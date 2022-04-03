import React from 'react'
import logo from '../images/logo_white.png'

const Footer = () => (
    <div className="footer" style={{background: "#589AAD", width:"90%", margin: "0 auto"}}>
        <div style={{padding: "1em 2em"}}>
            <img width="15%" src={logo}/>
            <div className="address" style={{color: "white", margin: "1em auto"}}>
                <p>LEO LEONHARD NACHLASS</p>
                <p>c/o Florian Leonhard</p>
                <p>Strasse 12</p>
                <p>12345 Stadt</p>
                <p>info@leoleonhard.de</p>
            </div>
        </div>
        <div>
        </div>
    </div>
)

export default Footer
