import express from 'express';
export const router = express.Router();

import { getUsers, createUser, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';


router
    .route('/')
        .post(createUser)
        .get(getUsers);

router
    .route('/:id')
        .get(getUserById)
        .patch(updateUserById)
        .delete(deleteUserById);



