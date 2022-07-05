import axios from 'axios';
import SingleNews from '../../components/single-news/SingleNews';
import { eventByIdPath, newsPath } from '../../lib/api';

export async function getServerSideProps(context: any) {
    const event = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: eventByIdPath(context.query.id)
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
        news: event.data,
        recentNews: recentNews.data
      }
    }
}

export default SingleNews
