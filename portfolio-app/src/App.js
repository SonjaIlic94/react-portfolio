import React, { useState } from 'react'
import Nav from './components/Nav'
// import About from './components/About'
// import Gallery from "./components/Gallery"
import ContactForm from "./components/Contact"
// import Resume from "./components/Resume"
import Footer from "./components/Footer"
import Page from "./components/Page"

function App() {
  const [categories] = useState([
    {
      name: "about",
      description: "about"

    },
    {
      name: "resume",
      description: "Best Resume Ever adfasdfasdf https://sonjaIlic94.github.io/ShowGo/"
    },
    {
      name: "gallery",
      description: "gallery"
    },
    {
      name: "portfolio",
      description: "Sonja's portfolio!",
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
            <Page currentCategory={currentCategory}></Page>
            {/* <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Resume></Resume> */}
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

        <Footer></Footer>
      </main>

    </div>
  );
}

export default App;
