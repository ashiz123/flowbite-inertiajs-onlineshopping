import React from 'react'
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
          <header>
              <Header/>
          </header>
          <nav>
            <Navigation />
          </nav>
          <main>
            {children}
          </main>
          <footer>
             <Footer />
          </footer>
        </div>
      );
}


export default Layout;
