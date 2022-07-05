import axios from 'axios';
import SingleNews from '../../components/single-news/SingleNews';

export async function getServerSideProps(context: any) {
    const news = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `http://localhost:3000/api/news/${context.query.id}`
    });
    const recentNews = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `http://localhost:3000/api/news`
    });

    return {
      props: {
        news: news.data,
        recentNews: recentNews.data
      }
    }
}

export default SingleNews
