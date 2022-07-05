import type { NextPage } from 'next'
import axios from 'axios';
import Section from '../../components/section/Section'
import Service from '../../components/service/Service'
import AboutSection from '../../components/about-section/AboutSection';
import Clients from '../../components/clients/Clients';
import RecentNews from '../../components/recent-news/RecentNews';
import Contacts from '../../components/contacts/Contacts';
import classNames from 'classnames';
import { IService, ServiceOrientation } from '../../interfaces/service';
import { useState } from 'react';
import Head from 'next/head';
import { Intro } from '../../components/intro/Intro';
import { servicesPath } from '../../lib/api';

const Services: NextPage<{services: IService[]}> = ({services}) => {
    let verticalCount = services.length - services.length % 4;
    const [activeService, setActiveService] = useState<number>();

    const onClickHandeler = (id: number) => {
        setActiveService(activeService === id ? undefined : id);
    }

    return (
        <main className='overflow-hidden'>
            <Head>
                <title>Services | {process.env.NEXT_PUBLIC_TITLE}</title>
            </Head>
            <Intro
                col={(
                    <div>
                        <p className='text-xl md:text-3xl font-bold'>Lorem ipsum dolor sit amet</p>
                        <p className='font-light mt-20'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <p className='mt-20 font-medium'>scroll for more</p>
                    </div>
                )}
                image="/images/services.png"
            />
            <AboutSection/>
            <Section title='Our Services'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-25'>
                    {services.map((service, index) => {
                        let orientation = index < verticalCount ? ServiceOrientation.vertical : ServiceOrientation.horizontal;
                        let liClasses = classNames({
                            'md:col-span-4': orientation === ServiceOrientation.horizontal,
                            'opacity-30': !!activeService && activeService !== service.id,
                            'opacity-100': !!activeService && activeService === service.id,
                          });
                        return(
                            <div className={`relative col-span-1 transition-all duration-500 ease-out ${liClasses}`} key={service.id}>
                                <Service
                                    service={service}
                                    orientation={orientation}
                                    isActive={activeService === service.id}
                                    onClickHandeler={onClickHandeler}
                                />
                            </div>
                        )
                    })}
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

    return {
      props: {
        services: services.data
      }
    }
}

export default Services
