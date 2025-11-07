import express from 'express';
import labRoutes from '../routes/api/lab.routes.js';


const router = express.Router();


router.use('/laboratory', labRoutes)


export default router;