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
import { eventsPath, newsPath } from '../../lib/api';

const News: NextPage<{news: INews[], events: IEvent[]}> = ({news, events}) => {
    return (
        <main className='overflow-hidden'>
            <Head>
                <title>News | {process.env.NEXT_PUBLIC_TITLE}</title>
            </Head>
            {news?.[0] && (
                <Intro
                    col={(
                        <>
                            <span className='inline-block bg-green-light px-30 py-5 text-white text-center md:text-md font-medium mb-10'>New</span>
                            <p className='text-xl md:text-3xl font-bold'>{news[0].title}</p>
                            <p className='font-light mt-20'>{truncate(news[0].description, 120)}</p>
                            <div className="mt-10 md:mt-20">
                                <ReadMore href={`/news/${news[0].id}`} />
                            </div>
                        </>
                    )}
                    image={news[0].image}
                />
            )}
            
            <Section title='Recent news'>
                <div className='grid md:grid-cols-3 gap-x-25 gap-y-50'>
                    {news?.slice(1, news?.length)?.map((newsItem, index) => {
                        return <NewsItem news={newsItem} key={index} />
                    })}
                </div>
            </Section>

            <Section title='Events' titleLine={false}>
                <div className='grid md:grid-cols-2 gap-30'>
                    {events?.[0] && (
                        <Link href={`/events/${events[0].id}`}>
                            <a>
                                <div>
                                    <div className='aspect-w-9 aspect-h-10'>
                                        <img className='object-cover object-center' src={events[0].image} />
                                    </div>
                                    <p className='text-base md:text-lg font-medium mt-10 mb-10 md:mt-25 md:mb-15'>{events[0].title}</p>
                                    <p>{truncate(events[0].description, 100)}</p>
                                </div>
                            </a>
                        </Link>
                    )}
                    <div>
                        <div className='grid gap-70'>
                            {events?.slice(1,events?.length)?.map(eventItem => {
                                return <EventItem key={eventItem.id} event={eventItem} />
                            })}
                        </div>
                    </div>
                </div>
            </Section>

            <Contacts/>
        </main>
    )
}

export async function getServerSideProps(context: any) {
    const news = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: newsPath
    });

    const events = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: eventsPath
    });

    return {
      props: {
        news: news.data,
        events: events.data,
      }
    }
}

export default News
