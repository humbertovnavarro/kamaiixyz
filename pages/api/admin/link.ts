import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'lib/axios';
import { resolve } from 'path/posix';
type SyncRequest = {
  hostname: string,
  ticket: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method !== 'POST') {
    res.status(405).end();
    return resolve();
  }
  if(!req.body || !req.body.hostname || !req.body.ticket || !req.body.hostname.endsWith('.onion')) {
    res.status(400).end();
    return resolve();
  }
  const linkRequest: SyncRequest = req.body;
  // Decode ticket
  //

  // Check if ticket in database
  //

  // Add node to database
  //
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8kb',
    },
  },
}
