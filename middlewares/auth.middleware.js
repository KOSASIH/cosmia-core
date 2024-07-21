// auth.middleware.js
import { authService } from '../services/auth.service';

const authMiddleware = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  const user = await authService.verifyToken(token);
  if (!user) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  req.user = user;
  next();
};

export default authMiddleware;
