// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {projects} from '../index';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const categoryId:any = req.query.id;

  res.status(200).json(projects.filter(project => project.categoryId == categoryId));
}
