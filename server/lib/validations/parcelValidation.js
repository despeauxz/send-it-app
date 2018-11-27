/* eslint-disable indent */
import { check } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
    createParcel: [
        check('title')
            .trim()
            .custom(value => notEmpty(value, 'Title field cannot be left blank'))
            .isLength({ min: 4, max: 50 })
            .withMessage('Parcel title must be between 4 and 50'),
        check('weight')
            .trim()
            .custom(value => notEmpty(value, 'Weight cannot be left blank'))
            .isDecimal()
            .withMessage('Price must be a number or decimal')
            .custom(value => parseFloat(value).toFixed(2) > 0)
            .withMessage('Weight must be greater than 0'),
        check('from')
            .trim()
            .optional({ checkFalsy: true }),
        check('name')
            .trim()
            .custom(value => notEmpty(value, 'Name cannot be left blank')),
        check('digit')
            .trim()
            .optional({ checkFalsy: true })
            .isDecimal()
            .withMessage('Digit must be a number'),
        check('address')
            .trim()
            .custom(value => notEmpty(value, 'Address cannot be left blank'))
            .isLength({ max: 100 })
            .withMessage('Text must not be more than 100 characters'),
    ],
};
