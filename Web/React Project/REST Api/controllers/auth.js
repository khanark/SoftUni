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
const { validateUserRole } = require('../util/util');

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
// promote user [x] (only admins can promote users)
router.get('/role', async (req, res, next) => {
    try {
        const user = await verifyToken(req.headers);
        validateUserRole(user.role, 'admin');
        const promotedUser = await promoteUser(req.query, req.body);
        res.status(200).json(promotedUser);
    } catch (error) {
        next(error);
    }
});

// Admin and administrator can search for user [x]
router.get('/search', async (req, res, next) => {
    try {
        const user = await verifyToken(req.headers);
        validateUserRole(user.role, 'admin', 'administrator');
        const matchingUsers = await findUser(req.query);
        res.status(200).json(matchingUsers);
    } catch (error) {
        next(error);
    }
});

// Single user with ID [x] (everybody)
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
// Edit user information [x] (everybody)
router.put('/:id', async (req, res, next) => {
    try {
        await verifyToken(req.headers);
        const user = await updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Ban user with username [x] (admin & administrator)
router.delete('/', async (req, res, next) => {
    try {
        const user = await verifyToken(req.headers);
        validateUserRole(user.role, 'admin', 'administrator');
        const bannedUser = await banUser(req.query, req.body);
        res.status(200).json(bannedUser);
    } catch (error) {
        next(error);
    }
});

// Unban user with username [x] (admin & administrator)
router.patch('/', async (req, res, next) => {
    try {
        const user = await verifyToken(req.headers);
        validateUserRole(user.role, 'admin', 'administrator');
        const unbannedUser = await unbanUser(req.query);
        res.status(200).json(unbannedUser);
    } catch (error) {
        next(error);
    }
});

// Upload user photo [x] (everybody)
router.patch('/:id/photo', upload.single('file'), async (req, res, next) => {
    try {
        const user = await verifyToken(req.headers);
        if (user._id != req.params.id) {
            throw new Error('No permissions', { cause: 401 });
        }
        const editedUser = await uploadUserPhoto(
            req.params.id,
            req.file.originalname
        );
        res.status(200).json(editedUser);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
