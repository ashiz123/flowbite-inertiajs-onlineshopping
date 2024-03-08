import React from 'react'
import Header from './Header';
import Navigation from './Navigation';
import Nav from './Nav';
import Footer from './Footer';
import { initFlowbite } from 'flowbite'

const Layout = ({ children} ) => {
  
  initFlowbite();

  
    return (
        <div>
          <header>
              {/* <Header/> */}
          </header>
          <nav>
            <Navigation />
          </nav>
          <main className='mt-5 container mx-auto'>
            {children}
          </main>
          {/* <footer>
             <Footer />
          </footer> */}
        </div>
      );
}


export default Layout;
