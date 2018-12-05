import bcrypt from 'bcrypt';
import randomString from 'random-string';
import authData from '../seeders/user';
import Authorization from '../middlewares/Authorization';
import Mailer from '../utils/Mailer';

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
      user,
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

    const user = authData;
    if (payload.email !== authData.email) return res.status(401).json({ error: 'Invalid credentials' });
    const isValidPassword = UserController.verifyPassword(password, authData.password);

    if (!isValidPassword) return res.status(401).json({ error: 'Invalid Credentials' });
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

    /**
   * Sends password token to user
   * @method forgotPassword
   * @memberof UserController
   * @param {object} req
   * @param {object} res
   * @returns {(function|object)} Function next() or JSON object
   */
  static forgotPassword(req, res) {
    const { email } = req.body;
    const user = authData.email;
    if (!user) return res.status(404).json({ error: 'This user is not registered on the platform, please signup instead' });

    const token = randomString({ length: 40 });

    Mailer.forgotPasswordMail(token, email);

    return res.status(200).json({ message: 'A reset token has been sent to your email address' });
  }
}

export default UserController;
