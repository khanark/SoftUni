const {
    getAllCourses,
    createCourse,
    getSingleCourse,
    deleteCourse,
    updateCourse,
    startCourse,
} = require('../services/course');
const { isValidObjectId } = require('mongoose');
const { verifyToken } = require('../services/user');
const { validateUserRole } = require('../util/util');

const router = require('express').Router();

// getting all the courses [doesn't need authorization]
router.get('/', async (req, res, next) => {
    try {
        const courses = await getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
});

// Creating a course [needs authorization]
router.post('/', async (req, res, next) => {
    try {
        const user = await verifyToken(req.headers);
        const course = await createCourse(req.body, user._id);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
});

// FOR EVERYBODY [doesn't need authorization]
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Course doesn't exist in the database", {
                cause: 404,
            });
        }
        const course = await getSingleCourse(id);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Course doesn't exist in the database", {
                cause: 404,
            });
        }
        await verifyToken(req.headers);
        const course = await updateCourse(id, req.body);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Course doesn't exist in the database", {
                cause: 404,
            });
        }
        const user = await verifyToken(req.headers);
        validateUserRole(user.role, 'admin');
        await deleteCourse(id);
        res.status(200).json({
            message: `Course with id: ${id} successfully deleted`,
        });
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Course doesn't exist in the database", {
                cause: 404,
            });
        }
        const user = await verifyToken(req.headers);
        validateUserRole(user.role, 'mentor');
        const course = await startCourse(id);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
