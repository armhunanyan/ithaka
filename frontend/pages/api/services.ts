// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IService } from '../../interfaces/service'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IService[]>
) {
  res.status(200).json([
    {
      id: 1,
      title: 'Architectural Solutions',
      image: '/services/1.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    },
    {
      id: 2,
      title: 'Interior Design',
      image: '/services/2.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: true
    },
    {
      id: 3,
      title: 'Urban Solutions',
      image: '/services/3.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    },
    {
      id: 4,
      title: 'Monuments Conservation',
      image: '/services/4.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    },
    {
      id: 5,
      title: 'Landscape Design',
      image: '/services/5.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    },
    {
      id: 6,
      title: 'Customer function',
      image: '/services/6.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    },
    {
      id: 7,
      title: 'Land development',
      image: '/services/7.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    },
    {
      id: 8,
      title: 'Consultation and researches',
      image: '/services/8.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    },
    {
      id: 9,
      title: 'Applied and industrial design',
      image: '/services/9.jpg',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      hasSurvey: false
    }
  ])
}
