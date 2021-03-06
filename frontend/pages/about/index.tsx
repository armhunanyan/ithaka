import type { NextPage } from 'next'
import Section from '../../components/section/Section'
import Service from '../../components/service/Service'
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AboutSection from '../../components/about-section/AboutSection';
import Clients from '../../components/clients/Clients';
import RecentNews from '../../components/recent-news/RecentNews';
import Contacts from '../../components/contacts/Contacts';
import axios from 'axios';
import { IService } from '../../interfaces/service';
import SectionTitle from '../../components/texting/SectionTitle';
import Exhibition from '../../components/exhibition/Exhibition';
import { IExhibition } from '../../interfaces/exhibition';
import Link from 'next/link';
import LightButton from '../../components/light-button/LightButton';
import Head from 'next/head';
import { Intro } from '../../components/intro/Intro';
import { lastExhibitionPath, servicesPath } from '../../lib/api';
//import 'swiper/css/navigation';

const About: NextPage<{services: IService[], exhibition: IExhibition}> = ({services, exhibition}) => {
  return (
    <main className='overflow-hidden'>
      <Head>
          <title>About | {process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>

      <Intro
        col={(
          <div>
            <p className='text-xl md:text-3xl font-bold'>Lorem ipsum dolor sit amet</p>
            <p className='font-light mt-20'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <Link href="/about/info">
              <a className='inline-block font-medium mt-20'>Read more</a>
            </Link>
            <div className='flex justify-between md:justify-start mt-30 md:mt-90'>
              <div>
                <p className='text-base md:text-xl'>200.000 +</p>
                <p className='text-xs'>sq. m. built area</p>
              </div>
              <div className='ml-0 md:ml-50'>
                <p className='text-base md:text-xl'>100 +</p>
                <p className='text-xs'>projects</p>
              </div>
              <div className='ml-0 md:ml-50'>
                <p className='text-base md:text-xl'>27</p>
                <p className='text-xs'>years of<br></br>experience</p>
              </div>
              <div className='ml-0 md:ml-50'>
                <p className='text-base md:text-xl'>12</p>
                <p className='text-xs'>international<br></br>awards</p>
              </div>
            </div>
          </div>
        )}
        image="/images/about/1.jpg"
      />
    
      <Section title='Our Services'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 3,
              navigation: false
            }
          }}
          navigation
        >
          {services.map((service, index) => {
            return(
              <SwiperSlide key={index}>
                <Service
                  service={service}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Section>
      <Section titleLine={false}>
        <div className='flex justify-between items-center'>
          <SectionTitle text="Exhibitions & awards" line={false} />
          <div className='hidden md:block'>
            <Link href="/about/exhibitions-and-awards">
              <a className='font-medium'>More from latest</a>
            </Link>
          </div>
        </div>
        <Exhibition exhibition={exhibition} />
        <div className='flex md:hidden justify-center mt-20'>
          <LightButton href="/about/exhibitions-and-awards">
            More from latest
          </LightButton>
        </div>
      </Section>
      <RecentNews/>
      <Clients />
      <Contacts/>
    </main>
  )
}

export async function getServerSideProps(context: any) {
    const services = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: servicesPath
    });
    const exhibition = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: lastExhibitionPath
    });

  return {
    props: {
      services: services.data,
      exhibition: exhibition.data
    }
  }
}

export default About
