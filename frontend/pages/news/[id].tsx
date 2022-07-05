import axios from 'axios';
import SingleNews from '../../components/single-news/SingleNews';
import { newsByIdPath, newsPath } from '../../lib/api';

export async function getServerSideProps(context: any) {
    const news = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: newsByIdPath(context.query.id)
    });
    const recentNews = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: newsPath
    });

    return {
      props: {
        news: news.data,
        recentNews: recentNews.data
      }
    }
}

export default SingleNews
