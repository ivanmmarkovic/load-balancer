import express from 'express';
export const router = express.Router();

import { createArticle, getArticles } from '../controllers/articleController.js';

router
    .route('/')
        .post(createArticle)
        .get(getArticles);

