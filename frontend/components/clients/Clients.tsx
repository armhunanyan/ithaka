import Section from '../section/Section';
import { useContext, useEffect } from 'react';
import { InitialDataContext } from '../../contexts/initial-data/InitialDataContext';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IClient } from '../../interfaces/client';
import axios from 'axios';
import { clientsPath } from '../../lib/api';

const Client:React.FC<IClient> = ({title, image}) => {
    return (
        <div className="text-center">
            <div className='aspect-w-3 aspect-h-2 mb-20 '>
                <img className="mx-auto object-scale-down object-center" src={image}></img>
            </div>
            <p className="text-base md:text-md font-medium">{title}</p>
        </div>
    )
}

const Clients:React.FC = () => {
    const {clients, setClients} = useContext(InitialDataContext)
    useEffect(() => {
        if (!clients) {
            axios.get(clientsPath)
            .then(res => {
                setClients(res.data);
            })
        }
    }, [])
    
    return (
        <Section className='clients-slider' title='Our Clients'>
            <Swiper
            modules={[Navigation]}
            spaceBetween={80}
            slidesPerView={4}
            navigation={{
                prevEl: '.clients-slider .swiper-button-prev',
                nextEl: '.clients-slider .swiper-button-next'
            }}
            breakpoints={{
                200: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                600: {
                    slidesPerView: 4,
                    spaceBetween: 80
                },
            }}
            >
            {clients?.map((client, index) => {
                return(
                <SwiperSlide key={index}>
                    <Client
                        id={client.id}
                        title={client.title}
                        image={client.image}
                    />
                </SwiperSlide>
                )
            })}
            </Swiper>
            <div className="navigation-buttons flex justify-center items-center gap-30 mt-25 md:mt-50">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </Section>
    )
}

export default Clients;