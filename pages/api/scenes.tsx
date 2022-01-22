import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}
export default handler;
