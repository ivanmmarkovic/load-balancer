

export const getArticles = async (req, res, next) => {
    return res.status(200).json({ message: 'Get article route' });
};

export const createArticle = async (req, res, next) => {
    return res.status(200).json({ message: 'Create article route' });
};