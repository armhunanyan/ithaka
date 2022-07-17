import { IAbout } from './../../interfaces/about';
import type { NextApiRequest, NextApiResponse } from 'next'

const aboutItems = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        image: '/images/about/1.jpg',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
        id: 2,
        title: 'Aliquip aliquip quis est minim dolor',
        image: '/images/about/2.jpg',
        content: 'Eu ipsum eiusmod eu ex excepteur ipsum ex incididunt tempor. Cupidatat ut ex sint deserunt deserunt mollit Lorem cupidatat duis quis ut adipisicing incididunt. Minim sint dolore ipsum labore veniam voluptate duis nisi deserunt tempor. Elit aliqua aliqua sit Lorem ullamco excepteur in. Fugiat eiusmod consectetur proident laborum ex consequat laboris aliqua duis duis qui.',
    },
    {
        id: 3,
        title: 'Magna aliqua non fugiat quis enim nisi',
        image: '/images/about/3.jpg',
        content: 'Est id pariatur fugiat elit amet ad sunt exercitation nulla excepteur sit. Esse exercitation sunt aute ad. Aute laborum ut minim deserunt ut enim magna. Veniam eiusmod fugiat consectetur sint mollit commodo consectetur nulla amet. Laboris qui Lorem id reprehenderit.',
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<IAbout[]>) {
    res.status(200).json(aboutItems);
}
