import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

   if (authHeader) {
       const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    try {
        const decoded=jwt.verify(token, secretKey) as JwtPayload;
      
            req.user = decoded;
      return next(); 
    } catch(err) {
      return res.sendStatus(403); 

    }

  } else {
    res.sendStatus(401);
  }
};