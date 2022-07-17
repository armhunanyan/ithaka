import type { NextPage } from 'next'
import axios from 'axios';
import Section from '../../components/section/Section'
import Contacts from '../../components/contacts/Contacts';
import { INews } from '../../interfaces/news';
import NewsItem from '../../components/news-item/NewsItem';
import ReadMore from '../../components/read-more/ReadMore';
import { IEvent } from '../../interfaces/event';
import EventItem from '../../components/event/Event';
import { truncate } from '../../lib/utils';
import Head from 'next/head';
import { Intro } from '../../components/intro/Intro';
import Link from 'next/link';
import { categoriesPath, eventsPath, newsPath, projectsPath } from '../../lib/api';
import Clients from '../../components/clients/Clients';
import { ICategory } from '../../interfaces/category';
import Category from '../../components/category/Category';
import { IProject } from '../../interfaces/project';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Project from '../../components/project/Project';

interface IProjectsProps {
    projects: IProject[];
    categories: ICategory[];
}

const Projects: NextPage<IProjectsProps> = ({projects, categories}) => {
    return (
        <main className='overflow-hidden'>
            <Head>
                <title>Projects | {process.env.NEXT_PUBLIC_TITLE}</title>
            </Head>
            {projects && (
                <div className="container">
                    <div className="intro-slider">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={1}
                            loop={true}
                            autoplay={ {
                                delay: 3000,
                            }}
                            speed={800}
                            navigation={{
                                prevEl: '.intro-slider .swiper-button-prev',
                                nextEl: '.intro-slider .swiper-button-next'
                            }}
                            >
                            {projects.slice(0, 3).map((project, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <Link href={`/projects/${project.id}`}>
                                            <a>
                                                <div className="relative">
                                                    <div className='aspect-w-2 aspect-h-1'>
                                                        <img className='object-cover object-center' src={project.image} />
                                                    </div>
                                                    <div className="absolute left-0 bottom-40 bg-gray-dark text-white text-xs md:text-base px-30 md:px-80 py-5">{project.title}</div>
                                                </div>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            )}
            
            <Section title='Projects' titleLine={false}>
                <div className='grid md:grid-cols-2 gap-x-25 gap-y-20'>
                    {categories?.map((category, index) => {
                        return (
                            <Link key={index} href={`/projects/category/${category.id}`}>
                                <a>
                                    <Category category={category} key={index} />
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </Section>

            {projects?.[0] && (
                <Section title="Latest project">
                    <div className="grid md:grid-cols-3 gap-25 items-center">
                        <div className="order-2 md:order-none">
                            <p className="text-base md:text-lg font-medium my-10 md:my-25">{projects?.[0].title}</p>
                            <p>{truncate(projects?.[0].content, 180)}</p>
                            <div className="mt-10 md:mt-25">
                                <ReadMore href={`/projects/${projects?.[0].id}`}/>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className='aspect-w-3 aspect-h-2'>
                                <img className='object-cover object-center' src={projects[0].image} />
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {projects?.length > 0 && (
                <Section title="Recent projects">
                    <div className="recent-projects-slider">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={2}
                            spaceBetween={25}
                            loop={true}
                            autoplay={ {
                                delay: 3000,
                            }}
                            speed={800}
                            navigation={{
                                prevEl: '.recent-projects-slider .swiper-button-prev',
                                nextEl: '.recent-projects-slider .swiper-button-next'
                            }}
                            >
                            {projects.slice(0, 5).map((project, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <Link href={`/projects/${project.id}`}>
                                            <Project project={project} />
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </Section>
            )}

            <Clients />
            <Contacts/>
        </main>
    )
}

export async function getServerSideProps(context: any) {
    const projects = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: projectsPath
    });
    const categories = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: categoriesPath
    });

    return {
      props: {
        projects: projects.data,
        categories: categories.data
      }
    }
}

export default Projects
