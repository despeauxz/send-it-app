import express from 'express';
import authRoutes from './authRoutes';
import parcelRoutes from './parcelRoutes';

const apiRoutes = express.Router();

apiRoutes.use('/v1/parcels', parcelRoutes);
apiRoutes.use('/v1/auth', authRoutes);

export default apiRoutes;
