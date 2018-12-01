import jwt from 'jsonwebtoken';
import users from '../seeders/user';

/**
 * @exports
 * @class Authorization
 */
class Authorization {
  /**
   * @method getToken
   * @memberof Authorization
   * @param {object} req
   * @returns {string} token
   */
  static getToken(req) {
    const bearerToken = req.headers.authorization;
    const token = bearerToken && bearerToken.replace('Bearer ', '');

    return token;
  }

  /**
   * @method generateToken
   * @memberof Authorization
   * @param {object} user
   * @returns {string} token
   * expires in 24 hours
   */
  static generateToken(user) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email.toLowerCase(),
      },
      process.env.SECRET,
      {
        expiresIn: 86400,
      },
    );

    return token;
  }

  /**
   * Authorize user
   * @method authorize
   * @memberof Authorization
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {(function|object)} Function next() or JSON object
   */
  static authorize(req, res, next) {
    const token = Authorization.getToken(req);

    if (!token) return res.status(401).json({ error: 'Unauthorized user' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'User authorization token is expired' });
        }

        return res.status(401).json({ error: 'Failed to authenticate token' });
      }

      const foundUser = users.find(r => r.email === decoded.email);

      if (!foundUser) return res.status(401).json({ error: 'Unauthorized user' });

      req.userId = foundUser.id;
      req.email = foundUser.email;

      return next();
    });
  }
}

export default Authorization;
