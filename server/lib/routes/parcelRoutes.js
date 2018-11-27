/* eslint-disable no-unused-vars */
import express from 'express';
import ParcelController from '../controllers/ParcelController';

const parcelRoutes = express.Router();

parcelRoutes.get('/', ParcelController.getParcels);

export default parcelRoutes;
