import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact"

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Sonja's portfolio!",
    },
    {
      name: "Resume",
      description: "Best Resume Ever"
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>

    </div>
  );
}

export default App;
