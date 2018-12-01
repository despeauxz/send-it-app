import bcrypt from 'bcrypt';
import Authorization from '../middlewares/Authorization';
import authData from '../seeders/user';

const SALT_ROUNDS = 10;

/**
 * @exports
 * @class UserController
 */
class UserController {
  /**
    * Registers a new user
    * @method register
    * @memberof UserController
    * @param {object} req
    * @param {object} res
    * @returns {(function|object)} Function next() or JSON object
    */
  static register(req, res) {
    const {
      firstname,
      lastname,
      username,
      email,
      contactAddress,
      phoneNo,
      zipcode,
      password,
      passwordConfirm,
    } = req.body;

    const user = {
      id: 1,
      firstname,
      lastname,
      username,
      email: email.toLowerCase(),
      contactAddress,
      phoneNo,
      zipcode,
      password: UserController.hashPassword(password, SALT_ROUNDS),
    };
    const token = Authorization.generateToken(user);

    res.status(201).send({
      status: 201,
      message: 'Account created successfuly',
      data: user,
      token,
    });
  }

  /**
    * Logs in a user
    * @method login
    * @memberof UserController
    * @param {object} req
    * @param {object} res
    * @returns {(function|object)} Function next() or JSON object
    */
  static login(req, res) {
    const {
      email,
      password,
    } = req.body;

    const payload = {
      email: email.toLowerCase(),
      password,
    };

    if (payload.email !== authData.email) return res.status(401).json({ error: 'Invalid credentials' });
    const isValidPassword = UserController.verifyPassword(password, authData.password);

    if (!isValidPassword) return res.status(401).json({ error: 'Invalid credentials' });
    const user = authData;
    const token = Authorization.generateToken(user);

    return res.status(200).json({
      status: 200,
      user,
      token,
    });
  }

  /**
     * @method hashPassword
     * @memberof UserController
     * @param {string} password
     * @param {integer} salt
     * @returns
     */
  static hashPassword(password, salt) {
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  /**
    * @method verifyPassword
    * @memberof UserController
    * @param {string} password
    * @param {string} hash
    * @return {Promise} Promise of true or false
    */
  static verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

export default UserController;
