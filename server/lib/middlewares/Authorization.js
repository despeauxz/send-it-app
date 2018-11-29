import jwt from 'jsonwebtoken';

/**
 * @exports
 * @class Authorization
 */
class Authorization {
  /**
   * @constructor
   * @param {string} type
   */
  constructor(type) {
    this.type = type;
  }

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
   * expires in 48 hours
   */
  static generateToken(user) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email.toLowerCase(),
      },
      process.env.SECRET,
      {
        expiresIn: 172800,
      },
    );

    return token;
  }

  /**
   * Resets User Token
   * @method resetToken
   * @memberof Users
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static refreshToken(req, res) {
    
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
    
  }
}

export default Authorization;
