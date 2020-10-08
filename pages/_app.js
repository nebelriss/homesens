// import Head from 'next/head';
import Navbar from '../components/navbar.component';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
