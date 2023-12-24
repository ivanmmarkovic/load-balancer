

export const getUsers = async (req, res, next) => {
    console.log(req.service);
    return res.status(200).json({ message: 'Get users route' });
};

export const createUser = async (req, res, next) => {
    console.log(req.service);
    return res.status(200).json({ message: 'Create user route' });
};