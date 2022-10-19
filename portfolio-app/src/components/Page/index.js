import React from 'react'
import About from '../About'
// import Contact from '../Contact'
import Resume from '../Resume'
// import Gallery from '../Gallery'
import PageContent from '../PageContent'
import PhotoList from '../PhotoList'

function Page({ currentCategory }) {

    const renderPage = () => {
        switch (currentCategory.name) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <PhotoList />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}

export default Page;