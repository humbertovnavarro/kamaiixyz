// pages/_middleware.ts
import jwt from 'jsonwebtoken';
import config from 'config.json';
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, res: NextResponse) {
    if(req.headers.get('x-access-token') == null) {
        return;
    }
    if(req.headers.get('x-access-token') === config.privateKey) {
        NextResponse.next();
    }
    try {
        jwt.verify(req.headers.get('x-access-token') as string, config.privateKey);
    } catch (err) {
        NextResponse.redirect('/error/401');
    }
    NextResponse.next();
}
