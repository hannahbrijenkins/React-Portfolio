import React from 'react';
import portrait from "../../assets/portrait/Headshot.jpg"

function About() {
    return (
        <section>
            <h1>About Me</h1>
            <img src={portrait}/>
            <p>Hi! Welcome to the Dark Si-uh... I mean... my portfolio! My name is Hannah. I am an aspiring full stack web developer. Currently, I enjoy working with HTML, CSS, and am currently learning Javascript. I have experience in graphic design with Photoshop, and dabble in freelance social media management. My hobbies include hiking, cooking, and casual gaming. If you'd like, check out my work below!</p>
        </section>
    );
}

export default About;
