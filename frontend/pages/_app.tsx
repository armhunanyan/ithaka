import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { InitialDataContext } from '../contexts/initial-data/InitialDataContext'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const aboutInfo = {
  title: 'Ithaka - Architecture and Design',
  content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image: '/images/about.png'
};

const recentNews = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  }
]

const clients = [
  {
    title: 'Republic of Armenia',
    image: '/clients/1.png'
  },
  {
    title: 'Restaurant “Dolmama”',
    image: '/clients/2.png'
  },
  {
    title: 'Troika dialogue - Russian investment company',
    image: '/clients/3.png'
  },
  {
    title: 'Legion Development - Group of companies',
    image: '/clients/4.png'
  },
  {
    title: 'Republic of Armenia',
    image: '/clients/1.png'
  },
  {
    title: 'Restaurant “Dolmama”',
    image: '/clients/2.png'
  },
  {
    title: 'Troika dialogue - Russian investment company',
    image: '/clients/3.png'
  },
  {
    title: 'Legion Development - Group of companies',
    image: '/clients/4.png'
  }
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <InitialDataContext.Provider value={{aboutInfo, recentNews, clients}}>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </InitialDataContext.Provider>
  )
}

export default MyApp
