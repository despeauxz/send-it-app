/* eslint-disable indent */
import { check } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
    createParcel: [
        check('title')
            .trim()
            .exists().withMessage('The title field is required')
            .custom(value => notEmpty(value, 'Title field cannot be left blank'))
            .isLength({ min: 4, max: 50 })
            .withMessage('Parcel title must be between 4 and 50'),
        check('weight')
            .trim()
            .exists().withMessage('The weight field is required')
            .custom(value => notEmpty(value, 'Weight cannot be left blank'))
            .isDecimal()
            .withMessage('Weight must be a number or decimal')
            .custom(value => parseFloat(value).toFixed(2) > 0)
            .withMessage('Weight must be greater than 0'),
        check('from')
            .trim()
            .optional({ checkFalsy: true }),
        check('name')
            .trim()
            .exists().withMessage('Receivers name field is required')
            .custom(value => notEmpty(value, 'Name cannot be left blank')),
        check('digit')
            .trim()
            .exists().withMessage('Phone number is required')
            .optional({ checkFalsy: true })
            .isDecimal()
            .withMessage('Digit must be a number'),
        check('address')
            .trim()
            .exists().withMessage('The address field is required')
            .custom(value => notEmpty(value, 'Address cannot be left blank'))
            .isLength({ max: 100 })
            .withMessage('Text must not be more than 100 characters'),
    ],
};
