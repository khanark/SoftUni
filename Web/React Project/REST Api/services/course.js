const Course = require('../models/Course');

module.exports = {
    getAllCourses,
    getSingleCourse,
};

async function getAllCourses() {
    // implement sorting on change with match
    return Course.find().lean();
}

async function getSingleCourse(id) {
    return Course.findById(id)
        .populate('appliedUsers', ['_id', 'username'])
        .lean();
}
