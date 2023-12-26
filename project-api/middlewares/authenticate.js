import { verify } from 'jsonwebtoken';

/**
 * Middleware for authentication
 * @see https://www.npmjs.com/package/express-jwt
 */
export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      name: 'Error',
      message: 'Unauthorized',
    });
  }

  const token = authorization.split(' ').reverse()[0];
  verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        name: 'Error',
        message: `Unauthorized ${err.name}`,
      });
    }

    // Check for required fields in the JWT payload
    const { me, _id, email } = decoded;
    if (!email || (!me && !_id)) {
      return res.status(401).json({
        name: 'Error',
        message: 'Unauthorized Malformed JWT',
      });
    }

    // Make the decoded JWT payload available on the request object
    req.user = decoded;
    req.user._id = me; // alias

   
    next();
  });
};
