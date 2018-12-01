import express from 'express';
import parcelRoutes from './parcelRoutes';

const apiRoutes = express.Router();

apiRoutes.use('/v1/parcels', parcelRoutes);

export default apiRoutes;
