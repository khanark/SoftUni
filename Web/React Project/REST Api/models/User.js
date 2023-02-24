const { model, Schema, Types: ObjectId } = require('mongoose');

// email, username, password, role

const userSchema = new Schema({
    email: {
        type: String,
        requered: true,
        match: [
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}/,
            'Invalid email format',
        ],
    },
    username: {
        type: String,
        required: true,
        minLength: [4, 'Username should be minimum 4 characters long'],
    },
    password: { type: String, required: true },
    isBanned: {
        status: { type: Boolean, default: false },
        reason: { type: String },
    },
    role: {
        type: String,
        enum: ['admin', 'moderator', 'user', 'mentor', 'Invalid role'],
        default: 'user',
    },
    photo: { type: String },
    // appliedCourses: [{ type: ObjectId, ref: 'Course' }],
});

module.exports = model('User', userSchema);
