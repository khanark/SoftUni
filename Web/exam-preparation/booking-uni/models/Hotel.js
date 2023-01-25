const {
    Schema,
    model,
    Types: { ObjectId },
} = require('mongoose');

const hotelSchema = new Schema({
    name: { type: String, required: [true, 'Name is required'], unique: true },
    city: { type: String, required: [true, 'city is required'] },
    imageUrl: { type: String, required: [true, 'image is required'] },
    freeRooms: {
        type: Number,
        required: [true, 'rooms is required'],
        min: 1,
        max: 100,
    },
    owner: { type: ObjectId, ref: 'User' },
});

hotelSchema.index(
    { name: 1 },
    {
        collation: {
            locale: 'en',
            strength: 2,
        },
    }
);

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;
