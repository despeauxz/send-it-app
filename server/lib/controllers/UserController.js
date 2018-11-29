/* eslint-disable indent */
import bcrypt from 'bcrypt';
import Authorization from '../middlewares/Authorization';

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
            password,
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
    
    }

    /**
    * @method verifyPassword
    * @memberof UserController
    * @param {string} password
    * @param {string} hash
    * @return {Promise} Promise of true or false
    */
    static verifyPassword(password, hash) {
        return bcrypt.compare(password, hash);
    }
}

export default UserController;