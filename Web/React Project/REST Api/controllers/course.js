const {
    getAllCourses,
    createCourse,
    getSingleCourse,
} = require('../services/course');
const { isValidObjectId } = require('mongoose');
const { verifyToken } = require('../services/user');

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
        await verifyToken(req.headers);
        const course = await createCourse(req.body);
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

router.put('/:id', async (req, res) => {
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Course doesn't exist in the database", {
                cause: 404,
            });
        }
        await verifyToken(req.headers);
        const course = await updateCourse(id);
        res.status(200).json(course);
    } catch (error) {}
});

router.delete('/id', async (req, res, next) => {
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Course doesn't exist in the database", {
                cause: 404,
            });
        }
        await verifyToken(req.headers);
        await getSingleCourse(id);
        await deleteCourse(id);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Course doesn't exist in the database", {
                cause: 404,
            });
        }
        await verifyToken(req.headers);
        const course = await startCourse(id);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
