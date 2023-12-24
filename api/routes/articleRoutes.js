import express from 'express';
export const router = express.Router;


router
    .route('/articles')
        .post()
        .get();

