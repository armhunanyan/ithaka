import Section from "../section/Section";
import { useContext } from "react";
import { InitialDataContext } from "../../contexts/initial-data/InitialDataContext";
import ReadMore from "../read-more/ReadMore";

const RecentNews:React.FC = () => {
    const {recentNews} = useContext(InitialDataContext);
    return (
        <Section title='Recent news & events' titleLine={false} background='bg-gray-light' className="overflow-hidden">
            <div className='grid md:grid-cols-3 gap-20 md:gap-60 recent-news-wrapper'>
            {recentNews?.map((newsItem, index) => {
                return (
                <div key={index} className="relative border-b border-gray-dark/[.25] md:border-none  pb-20">
                    <p className='text-md md:text-lg mb-15 md:mb-25'>{newsItem.title}</p>
                    <p className='text-xs md:text-base font-light mb-15 md:mb-25'>{newsItem.content}</p>
                    <ReadMore onClick={() => alert('clicked')} />
                </div>
                )
            })}
            </div>
        </Section>
    )
}

export default RecentNews;