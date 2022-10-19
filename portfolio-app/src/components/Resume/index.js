import React from 'react';

const Resume = () => {
    return (
        <section className="my-5">
            <h1 id="resume">Resume</h1>
            <p>Proficiencies: HTML, CSS, Javascript</p>
            <div>
                Check out my resume here!
                < a href={'https://docs.google.com/document/d/1orRRNe-u01_drs9VOZYeVAaOMwudRG2t3HPXZXs2hmI/edit?usp=sharing'}>
                    <img
                        src={require(`../../../src/assets/footer/google-icon.png`)}

                        className="icons"

                    /></a>
            </div>
        </section>
    );
}

export default Resume;