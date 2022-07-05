import { useRouter } from "next/router";
import { INews } from "../../interfaces/news";
import { truncate } from "../../lib/utils";
import ReadMore from "../read-more/ReadMore";

const NewsItem:React.FC<{news: INews}> = ({news}) => {
    return (
        <div>
            <div className="aspect-w-5 aspect-h-6 grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
                <img className="object-cover object-center" src={news.image}/>
            </div>
            <div>
                <p className="text-base md:text-lg font-medium my-10 md:my-25">{news.title}</p>
                <p>{truncate(news.description, 100)}</p>
                <div className="mt-10 md:mt-25">
                    <ReadMore href={`/news/${news.id}`}/>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;