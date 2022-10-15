import React from "react";

function categorySelected() {
    console.log("clicked")
}

const Nav = () => {

    const categories = [
        {
            name: "Contact",
            description: "Sonja's Contact Info!",
        },
        {
            name: "Resume",
            description: "Best Resume Ever"
        },
    ];
    const handleClick = () => {
        console.log("click handled")
    }
    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Sonja
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick()}>Portfolio</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;