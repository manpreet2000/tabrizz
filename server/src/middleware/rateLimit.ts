import { Request } from 'express';
import { rateLimit } from 'express-rate-limit';


const rateLimiter = rateLimit({
  legacyHeaders: true,
  limit: 50,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  windowMs: 15 * 60 * 1000,
  keyGenerator: (req: Request) => {
    const apiKey = req.headers['x-api-key'] || req.query.apiKey;
    return (apiKey || req.ip) as string;
  },
});

export default rateLimiter;
