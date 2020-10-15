// import Head from 'next/head';
import React, { useState } from 'react';
import Sidebar from '../components/sidebar.component';
import Topbar from '../components/topbar.component';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const [isMobileMenuOpen, setIsMobileMenu] = useState(false);
  const openMobileMenu = () => setIsMobileMenu(true);
  const closeMobileMenu = () => setIsMobileMenu(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
      />
      <Topbar openMobileMenu={openMobileMenu}>
        <main
          className="flex-1 relative overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <Component {...pageProps} />
        </main>
      </Topbar>
    </div>
  );
}

export default MyApp;
