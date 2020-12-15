import React from 'react'
import cvpdf from '../../items/imgs/MarcoDominguesCV.pdf'

export const Nav = () => {
    return (
        <div id="menu"> 
            <h2 id="menutitle">Menu</h2>
            <ul>
                <li className="menuopt fchild"><a href="#home">Homepage</a></li>
                <li className="menuopt"><a href={cvpdf} download="MarcoDominguesCV">Download CV</a></li>
                <li className="menuopt"><a href="#projects">Recent Projects</a></li>
                <li className="menuopt"><a href="#skills">my Skills</a></li>
                <li className="menuopt"><a href="#contact">Contact me</a></li>
            </ul>         
        </div>
    )
}

export default Nav;