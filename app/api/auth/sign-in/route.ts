
import jwt from "jsonwebtoken";

export const authenticated = handler => async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).end();

  try {
    const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
    req.user = decoded;
    return handler(req, res);
  } catch (error) {
    return res.status(401).end();
  }
};