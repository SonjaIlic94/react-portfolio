import React from "react";
import coverImage from "../../../src/assets/cover/cover-image.jpg";

const About = () => {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="cover-img my-2" style={{ width: "100%" }} alt="cover" />
            <p> I am a junior developer who is interested in making new projects!</p>
        </section>
    );
}

export default About;