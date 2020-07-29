import React, { Fragment } from 'react';
import Header from '../common/Header';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import SectionBar from '../components/SectionBar';
import Contact from '../components/Contact';
import Footer from '../common/Footer';
import Home from '../components/Home';

const Layout = () => {
    return ( 
        <Fragment>
            <Header />

            <Home />

            <main id="main" className="site-main">

                <About />

                <Services />

                <Portfolio />

                <SectionBar />

                <Contact />
            </main>

            <Footer />

        </Fragment>
     );
}
 
export default Layout;