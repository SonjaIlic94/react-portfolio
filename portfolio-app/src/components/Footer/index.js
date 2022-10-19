import React from "react";

const Footer = () => {
    return (
        <section className="footer-container my-5">
            <div className="footer-icons">
                < a href={'https://www.linkedin.com/in/sonja-ilic-674644a6/'}>
                    <img
                        src={require(`../../../src/assets/footer/linkedin-icon.png`)}

                        className="icons"

                    /></a>
                < a href={'https://github.com/SonjaIlic94'}>
                    <img
                        src={require(`../../../src/assets/footer/github-icon.png`)}

                        className="icons"

                    /></a>
            </div>

        </section>
    );
}

export default Footer;