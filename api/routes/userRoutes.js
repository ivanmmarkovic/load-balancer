import express from 'express';
export const router = express.Router();

import { getUsers, createUser } from '../controllers/userController.js';


router
    .route('/')
        .post(createUser)
        .get(getUsers);

