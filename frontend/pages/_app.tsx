import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { InitialDataContext } from '../contexts/initial-data/InitialDataContext'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => { 
  const [clients, setClients] = useState(null);
  const [aboutInfo, setAboutInfo] = useState(null);
  const [recentNews, setRecentNews] = useState(null);
  return (
    <InitialDataContext.Provider value={{
      aboutInfo,
      setAboutInfo,
      recentNews,
      setRecentNews,
      clients,
      setClients
      }}>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </InitialDataContext.Provider>
  )
}


export default MyApp
