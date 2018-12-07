/* eslint-disable no-unused-vars */
import express from 'express';
import UserController from '../controllers/UserController';
import authValidation from '../validations/authValidation';
import ValidationHandler from '../middlewares/ValidationHandler';
import TrimValues from '../middlewares/TrimValues';

const authRoutes = express.Router();
const validation = [ValidationHandler.validate, TrimValues.trim, ValidationHandler.isEmptyReq];

authRoutes.post('/signup', authValidation.register, validation, UserController.register);
authRoutes.post('/login', authValidation.login, validation, UserController.login);
authRoutes.post('/forgot_password', authValidation.forgotPassword, validation, UserController.forgotPassword);

export default authRoutes;