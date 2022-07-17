import { NextPage } from "next";
import Section from "../section/Section";
import Contacts from '../../components/contacts/Contacts';
import dayjs from "../../lib/dayjs";
import NewsItem from '../../components/news-item/NewsItem';
import { INews } from "../../interfaces/news";

const SingleNews: NextPage<{news: INews; recentNews: INews[]}> = ({news, recentNews}) => {
    return (
        <main className='overflow-hidden'>
            {news && (
                <Section className='md:pt-0'>
                    <div className='bg-gray-light'>
                        <div className='grid md:grid-cols-25 items-center'>
                            <div className='md:col-span-13 px-20 py-25'>
                                <p className='font-medium'>{dayjs.utc(news.createdAt).format('DD MMMM')}</p>
                                <p className='text-xl md:text-3xl font-bold'>{news.title}</p>
                            </div>
                            <div className='md:col-span-12'>
                                <div className='aspect-w-9 aspect-h-10'>
                                    <img className='object-cover object-center' src={news.image} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-light mt-20'>{news.content}</p>
                    </div>
                </Section>
            )}
            
            <Section title='Recent news'>
                <div className='grid grid-cols-3 gap-x-25 gap-y-50'>
                    {recentNews?.map((newsItem, index) => {
                        return <NewsItem news={newsItem} key={index} />
                    })}
                </div>
            </Section>

            <Contacts/>
        </main>
    )
}

export default SingleNews;