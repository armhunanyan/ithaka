import type { NextApiRequest, NextApiResponse } from 'next'
import { IClient } from '../../interfaces/client';
import { IExhibition } from './../../interfaces/exhibition';

const clients = [
    {
        id: 1,
        title: 'Republic of Armenia',
        image: '/clients/1.png'
    },
    {
        id: 2,
        title: 'Restaurant “Dolmama”',
        image: '/clients/2.png'
    },
    {
        id: 3,
        title: 'Troika dialogue - Russian investment company',
        image: '/clients/3.png'
    },
    {
        id: 4,
        title: 'Legion Development - Group of companies',
        image: '/clients/4.png'
    },
    {
        id: 5,
        title: 'Republic of Armenia',
        image: '/clients/1.png'
    },
    {
        id: 6,
        title: 'Restaurant “Dolmama”',
        image: '/clients/2.png'
    },
    {
        id: 7,
        title: 'Troika dialogue - Russian investment company',
        image: '/clients/3.png'
    },
    {
        id: 8,
        title: 'Legion Development - Group of companies',
        image: '/clients/4.png'
    }
  ]

export default function handler(req: NextApiRequest, res: NextApiResponse<IClient[]>) {
    res.status(200).json(clients);
}
