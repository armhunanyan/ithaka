import type { NextApiRequest, NextApiResponse } from 'next'
import { IExhibition } from './../../interfaces/exhibition';

const exhibitions = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        companyName: 'Company name',
        image: '/exhibitions/1.png',
        content: 'Qui nulla sint aliquip eu nostrud. Commodo mollit excepteur magna consectetur duis est qui cillum esse amet. Aliqua veniam ullamco cillum adipisicing reprehenderit adipisicing. Sit sit nulla anim culpa ullamco sit. Irure eiusmod laboris id nulla quis nisi ullamco quis dolore consectetur sunt officia velit. In deserunt ex occaecat sint anim magna consequat excepteur.',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet',
        companyName: 'Company name',
        image: '/exhibitions/2.png',
        content: 'Qui nulla sint aliquip eu nostrud. Commodo mollit excepteur magna consectetur duis est qui cillum esse amet. Aliqua veniam ullamco cillum adipisicing reprehenderit adipisicing. Sit sit nulla anim culpa ullamco sit. Irure eiusmod laboris id nulla quis nisi ullamco quis dolore consectetur sunt officia velit. In deserunt ex occaecat sint anim magna consequat excepteur.',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet',
        companyName: 'Company name',
        image: '/exhibitions/3.png',
        content: 'Qui nulla sint aliquip eu nostrud. Commodo mollit excepteur magna consectetur duis est qui cillum esse amet. Aliqua veniam ullamco cillum adipisicing reprehenderit adipisicing. Sit sit nulla anim culpa ullamco sit. Irure eiusmod laboris id nulla quis nisi ullamco quis dolore consectetur sunt officia velit. In deserunt ex occaecat sint anim magna consequat excepteur.',
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet',
        companyName: 'Company name',
        image: '/exhibitions/4.png',
        content: 'Qui nulla sint aliquip eu nostrud. Commodo mollit excepteur magna consectetur duis est qui cillum esse amet. Aliqua veniam ullamco cillum adipisicing reprehenderit adipisicing. Sit sit nulla anim culpa ullamco sit. Irure eiusmod laboris id nulla quis nisi ullamco quis dolore consectetur sunt officia velit. In deserunt ex occaecat sint anim magna consequat excepteur.',
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet',
        companyName: 'Company name',
        image: '/exhibitions/5.png',
        content: 'Qui nulla sint aliquip eu nostrud. Commodo mollit excepteur magna consectetur duis est qui cillum esse amet. Aliqua veniam ullamco cillum adipisicing reprehenderit adipisicing. Sit sit nulla anim culpa ullamco sit. Irure eiusmod laboris id nulla quis nisi ullamco quis dolore consectetur sunt officia velit. In deserunt ex occaecat sint anim magna consequat excepteur.',
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<IExhibition[]>) {
    res.status(200).json(exhibitions);
}
