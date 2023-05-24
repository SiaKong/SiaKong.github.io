import React from "react";

import Firebase from '../assets/firebase.png';
import GoLang from '../assets/golang.svg';
import Java from '../assets/java.png';
import MSSQL from '../assets/mssql.png';
import MySQL from '../assets/mysql.png';
import Ocaml from '../assets/ocaml.png';
import PostgreSQL from '../assets/postgresql.png';
import Prolog from '../assets/prolog.png';
import Python from '../assets/python.png';
import Scheme from '../assets/scheme.svg';
import Trino from '../assets/trino.png';
import Linux from '../assets/linux.png';
import Superset from '../assets/superset.png';
import PowerBI from '../assets/powerbi.png';
import Docker from '../assets/docker.png';
import Flask from '../assets/flask.png';
import Django from '../assets/django.svg';
import AndroidStudio from '../assets/androidstudio.png';
import Git from '../assets/git.png';
import Reactimg from '../assets/react.png';
import Node from '../assets/node.png';
import Javascript from '../assets/javascript.png';
import P5 from '../assets/p5.png';

import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';

function Skills() {
    
      
    return (
        <div id="skillsdiv">
            <h2><span class="thighlight">Connect with me</span></h2>
            <div>
                <a href="https://www.linkedin.com/in/siana-kong-2a4093195/"><img class="social" src={linkedin} width={'30px'} alt={"linkedin"}/></a>
                <a href="mailto:sianabinkong@gmail.com"><img class="social" src={gmail} width={'30px'} alt={"gmail"}/></a>
                <a href="https://github.com/SiaKong"><img class="social" src={github} width={'30px'} alt={"github"}/></a>
            </div>
            <br></br>

            <h2><span class="thighlight">My main interests</span></h2>
            <p class="interest" style={{margin:"0"}}><mark>&nbsp;Full Stack Development&nbsp;</mark></p>
            <p class="interest" style={{margin:"0"}}><mark>&nbsp;Web/ App Development&nbsp;</mark></p>
            <p class="interest" style={{margin:"0"}}><mark>&nbsp;Backend Engineering&nbsp;</mark></p>
            <p class="interest" style={{margin:"0"}}><mark>&nbsp;Social Media Technology&nbsp;</mark></p>

            <br></br>
            <br></br>
            <h2><span class="thighlight">Learning never ends</span></h2>
            <p class="turing" style={{margin:"0",textShadow:"0 0 5px rgb(80, 46, 83), 0 0 5px rgb(80, 46, 83), 0 0 5px black"}}>Learn continually - there's always one more thing to learn!</p>
            <p class="turing" style={{margin:"0", padding:"0"}}>- Steve Jobs</p>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src={GoLang} height="65px" width="65px" alt="GoLang" />
                    </div>
                    <div class="slide">
                        <img src={Java} height="65px" width="65px" alt="Java" />
                    </div>
                    <div class="slide">
                        <img src={Python} height="65px" width="65px" alt="Python" />
                    </div>
                    <div class="slide">
                        <img src={Javascript} height="65px" width="65px" alt="Javascript" />
                    </div>
                    <div class="slide">
                        <img src={Scheme} height="65px" width="65px" alt="Scheme" />
                    </div>
                    <div class="slide">
                        <img src={P5} height="65px" width="65px" alt="P5.js" />
                    </div>
                    <div class="slide">
                        <img src={Firebase} height="65px" width="65px" alt="Firebase Database" />
                    </div>
                    <div class="slide">
                        <img src={MySQL} height="65px" width="65px" alt="MySQL" />
                    </div>
                    <div class="slide">
                        <img src={MSSQL} height="65px" width="65px" alt="MSSQL" />
                    </div>
                    <div class="slide">
                        <img src={PostgreSQL} height="65px" width="65px" alt="PostgreSQL" />
                    </div>
                    <div class="slide">
                        <img src={PowerBI} height="65px" width="65px" alt="PowerBI" />
                    </div>
                    <div class="slide">
                        <img src={Trino} height="65px" width="65px" alt="Trino" />
                    </div>
                    <div class="slide">
                        <img src={Ocaml} height="65px" width="65px" alt="Ocaml" />
                    </div>
                    <div class="slide">
                        <img src={Prolog} height="65px" width="65px" alt="Prolog" />
                    </div>
                    <div class="slide">
                        <img src={Git} height="65px" width="65px" alt="Git" />
                    </div>
                    <div class="slide">
                        <img src={Django} height="65px" width="65px" alt="Django" />
                    </div>
                    <div class="slide">
                        <img src={Flask} height="65px" width="65px" alt="Flask" />
                    </div>
                    <div class="slide">
                        <img src={Linux} height="65px" width="65px" alt="Linux" />
                    </div>
                    <div class="slide">
                        <img src={Superset} height="65px" width="65px" alt="Superset" />
                    </div>
                    <div class="slide">
                        <img src={Docker} height="65px" width="65px" alt="Docker" />
                    </div>
                    <div class="slide">
                        <img src={AndroidStudio} height="65px" width="65px" alt="Android Studio" />
                    </div>
                    <div class="slide">
                        <img src={Reactimg} height="65px" width="65px" alt="React" />
                    </div>
                    <div class="slide">
                        <img src={Node} height="65px" width="65px" alt="Node" />
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Skills