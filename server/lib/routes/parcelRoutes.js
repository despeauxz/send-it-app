/* eslint-disable no-unused-vars */
import express from 'express';
import ParcelController from '../controllers/ParcelController';
import parcelValidation from '../validations/parcelValidation';
import ValidationHandler from '../middlewares/ValidationHandler';
import TrimValues from '../middlewares/TrimValues';

const parcelRoutes = express.Router();
const validation = [ValidationHandler.validate, TrimValues.trim, ValidationHandler.isEmptyReq];

parcelRoutes.get('/', ParcelController.getParcels);
parcelRoutes.get('/:parcelId', ParcelController.fetchParcelByID);
parcelRoutes.put('/:parcelId/cancel', parcelValidation.updateParcel, validation, ParcelController.updateParcelStatus);
parcelRoutes.post('/', parcelValidation.createParcel, validation, ParcelController.createParcel);

export default parcelRoutes;
