import { clearCache } from '../services/cache';

export async function cleanCache(req, res, next) {
  await next();

  clearCache(req.user._id);
}