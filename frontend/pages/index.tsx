import type { NextPage } from 'next'
import Section from '../components/section/Section'
import Service from '../components/service/Service'
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AboutSection from '../components/about-section/AboutSection';
import Clients from '../components/clients/Clients';
import RecentNews from '../components/recent-news/RecentNews';
import Contacts from '../components/contacts/Contacts';
//import 'swiper/css/navigation';
const services = [
  {
    title: 'Architectural Solutions',
    image: '/services/1.jpg'
  },
  {
    title: 'Interior Design',
    image: '/services/2.jpg'
  },
  {
    title: 'Urban Solutions',
    image: '/services/3.jpg'
  },
  {
    title: 'Monuments Conservation',
    image: '/services/4.jpg'
  },
  {
    title: 'Landscape Design',
    image: '/services/5.jpg'
  },
  {
    title: 'Customer function',
    image: '/services/6.jpg'
  },
  {
    title: 'Land development',
    image: '/services/7.jpg'
  },
  {
    title: 'Consultation and researches',
    image: '/services/8.jpg'
  }
]

const Home: NextPage = () => {
  return (
    <main className='overflow-hidden'>
      <Section className='md:pt-0'>
        <div className='bg-gray-light'>
          <div className='grid md:grid-cols-2 items-end'>
            <div className='px-20 py-25'>
              <p className='text-xl md:text-3xl font-bold'>Lorem ipsum dolor sit amet</p>
              <p className='font-light mt-20'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <p className='mt-20'>scroll for more</p>
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
            <div>
              <img className='w-full' src='/images/slider.png' />
            </div>
          </div>
        </div>
      </Section>
      <AboutSection/>
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
                  title={service.title}
                  image={service.image}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Section>
      <RecentNews/>
      <Clients />
      <Contacts/>
    </main>
  )
}

export default Home
