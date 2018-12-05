/* eslint-disable indent */
import { check } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
    register: [
        check('firstname')
            .trim()
            .exists().withMessage('First name field is required')
            .custom(value => notEmpty(value, 'First name cannot be blank')),
        check('lastname')
            .trim()
            .exists().withMessage('Last name field is required')
            .custom(value => notEmpty(value, 'Last name cannot be blank')),
        check('username')
            .trim()
            .exists().withMessage('Username field is required')
            .isLength({ max: 40 })
            .withMessage('Username cannot be more than 40 characters')
            .custom(value => notEmpty(value, 'Username cannot be blank')),
        check('email')
            .trim()
            .normalizeEmail()
            .exists()
            .withMessage('Email address field is required')
            .isEmail()
            .withMessage('Please fill in a valid email')
            .custom(value => notEmpty(value, 'Email address name cannot be blank')),
        check('contactAddress')
            .trim()
            .optional(),
        check('phoneNo')
            .trim()
            .optional()
            .isNumeric()
            .withMessage('Phone digit must be a number'),
        check('zipcode')
            .trim()
            .exists().withMessage('Postal code field is required')
            .isNumeric()
            .withMessage('Zip code must be a number'),
        check('password')
            .trim()
            .exists().withMessage('Password field is required')
            .isLength({ min: 6 })
            .withMessage('Password must be minimum of 6 characters'),
        check('passwordConfirm', 'Passwords don\'t match')
            .trim()
            .exists().withMessage('Password Confirm field must be specified')
            .custom(value => notEmpty(value, 'Password Confirm field field cannot be left blank'))
            .custom((value, { req }) => value === req.body.password),

    ],

    login: [
        check('email')
            .trim()
            .exists().withMessage('Email address is required')
            .custom(value => notEmpty(value, 'Email field cannot be left blank'))
            .isEmail()
            .withMessage('Please fill in a valid email'),
        check('password')
            .trim()
            .exists().withMessage('Password field is required')
            .custom(value => notEmpty(value, 'Password field cannot be left blank')),
    ],
    forgotPassword: [
        check('email')
          .trim()
          .normalizeEmail()
          .exists()
          .withMessage('Email must be specified')
          .custom(value => notEmpty(value, 'Email field cannot be left blank'))
          .isEmail()
          .withMessage('Email is invalid')
      ],
};
