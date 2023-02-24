const {
    register,
    login,
    updateUser,
    verifyToken,
    uploadUserPhoto,
    getUserInfo,
    findUser,
    banUser,
} = require('../services/user');
const upload = require('../middlewares/upload');
// const { userViewModel } = require('../util/util');

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
// Single user with ID [x]
router.get('/:id', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await getUserInfo(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

// Admin and administrator can search for user []
router.get('/user', async (req, res) => {
    try {
        // !FIX This controller is not working
        res.send('this is working');
        await verifyToken(req.headers);
        const matchingUser = await findUser(req.query);
        res.status(200).send(matchingUser);
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
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

// Bann user with username []
router.delete('/user', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        await banUser(req.query, req.body);
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
