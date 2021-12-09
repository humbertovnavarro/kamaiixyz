import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import config from 'config.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    if(!req.query || !req.query.jwt) {
        res.redirect('/error/401');
    }
    if(typeof req.query['jwt'] != 'string') {
        res.redirect('/error/401');
    }
    const token = req.query['jwt'] as string;
    try {
        const verified = jwt.verify(token, config.privateKey);
    } catch (err) {
        res.redirect('/error/401');
    }   
}