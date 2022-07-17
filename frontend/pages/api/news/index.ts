// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { INews } from '../../../interfaces/news';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INews[]>
) {
  res.status(200).json([
    {
        id: 1,
        title: 'Et in ipsum incididunt officia dolore',
        image: '/news/1.jpg',
        content: 'Lorem velit in amet enim exercitation consequat nisi. Laborum minim velit eu culpa tempor. Fugiat non sint elit magna ex eu quis ut non. Mollit amet in laboris ad veniam dolore ad est. Ex enim excepteur cupidatat id cillum. Nulla voluptate exercitation consequat non ut amet velit eu anim aliqua non ex laboris.',
        createdAt: '2022-07-04T20:52:51.513Z'
    },
    {
        id: 2,
        title: 'Id commodo laborum culpa consequat eu',
        image: '/news/2.jpg',
        content: 'Irure culpa consequat occaecat consectetur est consectetur adipisicing minim tempor sint esse irure id. Ut pariatur quis tempor labore enim non do ullamco consectetur et consequat id mollit. Amet sint exercitation labore enim ipsum ea deserunt est proident ut voluptate sunt. Sit eiusmod culpa consectetur exercitation laborum ea reprehenderit do cillum mollit ut. Ut quis qui velit sunt dolor. Culpa occaecat officia ad minim nulla eu veniam aliqua occaecat ipsum cillum ipsum ea commodo.',
        createdAt: '2022-06-03T13:30:45.525Z'
    },
    {
        id: 3,
        title: 'Nisi amet ullamco consequat nisi et ex',
        image: '/news/3.jpg',
        content: 'Consectetur proident aliquip incididunt labore. Eu laboris ea ut deserunt elit occaecat proident. Consequat mollit mollit culpa in commodo eu elit excepteur deserunt do laborum.',
        createdAt: '2022-07-02T20:52:51.513Z'
    },
    {
        id: 4,
        title: 'Occaecat id esse id cupidatat do',
        image: '/news/4.jpg',
        content: 'Excepteur amet eu proident est non ipsum laborum veniam esse eiusmod. Laboris aliqua proident id fugiat est tempor. Nulla voluptate ut nulla qui est labore sint incididunt laboris. Sint consectetur nostrud incididunt id non quis culpa culpa incididunt nostrud laboris dolor ut. Aliquip excepteur dolore nulla eu proident velit amet ut.',
        createdAt: '2022-04-04T20:52:51.513Z'
    },
    {
        id: 5,
        title: 'Dolor anim anim cupidatat lorem',
        image: '/news/4.jpg',
        content: 'Excepteur amet eu proident est non ipsum laborum veniam esse eiusmod. Laboris aliqua proident id fugiat est tempor. Nulla voluptate ut nulla qui est labore sint incididunt laboris. Sint consectetur nostrud incididunt id non quis culpa culpa incididunt nostrud laboris dolor ut. Aliquip excepteur dolore nulla eu proident velit amet ut.',
        createdAt: '2022-03-04T20:52:51.513Z'
    }
  ])
}
