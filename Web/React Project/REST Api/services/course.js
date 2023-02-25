const Course = require('../models/Course');
const { validateCourse } = require('../util/util');

module.exports = {
    getAllCourses,
    getSingleCourse,
    createCourse,
    updateCourse,
    deleteCourse,
    startCourse,
};

async function getAllCourses() {
    // implement sorting on change with match
    return Course.find().lean();
}

async function getSingleCourse(id) {
    const course = Course.findById(id)
        .populate('appliedUsers', ['_id', 'username'])
        .lean();
    return validateCourse(course);
}

async function createCourse(
    { title, description, image, experience, startDate },
    creator
) {
    const course = new Course({
        title,
        description,
        image,
        experience,
        startDate,
        creator: creator,
    });
    await course.save();
    return validateCourse(course);
}

async function updateCourse(id) {
    const course = await Course.findById(id)
        .populate('appliedUsers', ['username'])
        .lean();
    return validateCourse(course);
}

async function deleteCourse(id) {
    await Course.findByIdAndRemove(id);
}

async function startCourse(id) {
    const course = await Course.findById(id);
    course.isActive = false;
    course.save();
    return validateCourse(course);
}
