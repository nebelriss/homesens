// import Head from 'next/head';
import App from 'next/app';
import React, { useState } from 'react';
import Sidebar from '../components/sidebar.component';
import Topbar from '../components/topbar.component';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps, locations }) {
  const [isMobileMenuOpen, setIsMobileMenu] = useState(false);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenu(false)}
        locations={locations}
      />
      <Topbar openMobileMenu={() => setIsMobileMenu(true)}>
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

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const resData = await fetch('http://localhost:3000/api/locations');
  const locations = await resData.json();
  return { ...appProps, locations };
};

export default MyApp;
