// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {categories} from './index';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const id:any = req.query.id;

  res.status(200).json(categories.find(category => category.id == id));
}
