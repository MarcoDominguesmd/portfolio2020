import React from 'react'
import htmlLogo from '../../items/imgs/htmlLogo.png'
import cssLogo from '../../items/imgs/cssLogo.png'
import jsLogo from '../../items/imgs/jsLogo.png'
import pythonLogo from '../../items/imgs/pythonLogo.png'
import javaLogo from '../../items/imgs/javaLogo.png'
import cLogo from '../../items/imgs/cLogo.png'
import sassLogo from '../../items/imgs/sassLogo.png'
import reactLogo from '../../items/imgs/reactLogo.png'


export const Skills = () => {
    return (
        <div id="skills">
            <h2>Skills</h2>
            <ul>             
                <li>
                    <div className="skillLogo"><img src={htmlLogo} alt=""/></div>
                    <p>HTML</p>
                </li>
                <li>
                    <div className="skillLogo"><img src={cssLogo} alt=""/></div>
                    <p>CSS</p></li>
                <li>
                    <div className="skillLogo"><img src={jsLogo} alt=""/></div>
                    <p>JavaScript</p>
                </li>
                <li>
                    <div className="skillLogo"><img src={pythonLogo} alt=""/> </div>
                    <p>Python</p>
                </li>
                <li>
                    <div className="skillLogo"><img src={javaLogo} alt=""/> </div>
                    <p>Java</p>
                </li>
                <li>
                    <div className="skillLogo"><img src={cLogo} alt=""/></div>
                    <p>C#</p>
                </li>
                           
                <li>
                    <div className="skillLogo"><img src={sassLogo} alt=""/></div>
                    <p>Sass</p>
                </li>
                
                <li>
                    <div className="skillLogo"><img src={reactLogo} alt=""/></div>
                    <p>ReactJS</p>
                </li>
                
              
            </ul>
        </div>
    )
}


export default Skills;