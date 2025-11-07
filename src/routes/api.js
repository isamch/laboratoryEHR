import express from 'express';
import authRoutes from './api/auth.routes.js';
import simpleRoutes from './api/simple.routes.js';

const router = express.Router();

// Authentication routes
router.use('/auth', authRoutes);

// Simple MVP routes (No authentication required)
router.use('/', simpleRoutes);

export default router;