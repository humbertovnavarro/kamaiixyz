// pages/_middleware.ts
import jwt from 'jsonwebtoken';
import config from 'config.json';
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, res: NextResponse) {
    if(req.headers.get('x-access-token') != config.privateKey) {
        return;
    }
    NextResponse.next();
}
