import React from 'react';

function About() {
    return (
        <div id="aboutdiv">
            <h1>University of Ottawa</h1>
            <h2>Honours B.Sc. in Computer Science</h2>
            <p style={{fontStyle: "italic", marginTop: 0}}>with Entrepreneurship & Management option</p>

            <h1 style={{marginTop: 0}}>&#8230;</h1>
            <p className="extra">Expected Grad: <span className='white'>&nbsp;Spring 2024</span></p>
            <p className="extra">GPA: <span className='white'>&nbsp;4.0/4.0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CGPA: <span className='white'>&nbsp;9.62/10.0</span></p>
        </div>
        
    );
}

export default About