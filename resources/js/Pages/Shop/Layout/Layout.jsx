import React from 'react'
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import { initFlowbite } from 'flowbite'

const Layout = ({ children }) => {
  initFlowbite();

  
    return (
        <div>
          <header>
              <Header/>
          </header>
          {/* <nav>
            <Navigation />
          </nav> */}
          <main>
            {children}
          </main>
          {/* <footer>
             <Footer />
          </footer> */}
        </div>
      );
}


export default Layout;
