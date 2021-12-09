import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { resolve } from 'path/posix';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).end();
  return resolve();
}

