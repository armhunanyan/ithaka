import type { NextApiRequest, NextApiResponse } from 'next'
import { ICategory } from '../../../interfaces/category';

export const categories = [
    {
        id: 1,
        title: 'Landscape design',
        image: '/categories/1.jpg'
    },
    {
        id: 2,
        title: 'Public',
        image: '/categories/2.jpg'
    },
    {
        id: 3,
        title: 'Residential',
        image: '/categories/3.jpg'
    },
    {
        id: 4,
        title: 'Urban',
        image: '/categories/4.jpg'
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<ICategory[]>) {
    res.status(200).json(categories);
}
