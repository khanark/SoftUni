const {
    model,
    Schema,
    Types: { ObjectId },
} = require('mongoose');

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Course title should be minimum 5 characters long'],
    },
    description: {
        type: String,
        required: true,
        minLength: [
            10,
            'Course description should be minimum 10 characters long',
        ],
    },
    startDate: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    price: {
        type: Number,
        required: true,
        min: [20, 'Price should be minimum 20'],
        max: [500, 'Price should be maximum 500'],
    },
    experience: {
        type: String,
        required: true,
        enum: ['Novice', 'Intermediate', 'Advanced', 'Expert'],
    },
    image: {
        type: String,
        required: true,
        match: [, 'Course description should be minimum 10 characters long'],
    },
    creator: { type: ObjectId, ref: 'User' },
    appliedUsers: [{ type: ObjectId, ref: 'User' }],
});

module.exports = model('Course', courseSchema);
