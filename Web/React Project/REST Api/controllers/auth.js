const {
    register,
    login,
    updateUser,
    verifyToken,
    uploadUserPhoto,
    getUserInfo,
    findUser,
    banUser,
    unbanUser,
    promoteUser,
} = require('../services/user');
const upload = require('../middlewares/upload');

const router = require('express').Router();

// *** CREATE REQUESTS ***
// Register [x]
router.post('/', async (req, res, next) => {
    try {
        const user = await register(req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Login [x]
router.post('/login', async (req, res, next) => {
    try {
        const user = await login(req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Logout [x]
router.get('/logout', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        res.status(204).json({});
    } catch (error) {
        next(error);
    }
});

// *** READ REQUESTS ***
// promote user [x]
router.get('/role', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await promoteUser(req.query, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Admin and administrator can search for user [x]
router.get('/search', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const matchingUsers = await findUser(req.query);
        res.status(200).json(matchingUsers);
    } catch (error) {
        next(error);
    }
});

// Single user with ID [x]
router.get('/:id', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await getUserInfo(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// *** UPDATE & DELETE REQUESTS ***
// Edit user information [x]
router.put('/:id', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Ban user with username [x]
router.delete('/', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await banUser(req.query, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Unban user with username [x]
router.patch('/', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await unbanUser(req.query);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Upload user photo [x]
router.patch('/:id/photo', upload.single('file'), async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await uploadUserPhoto(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
