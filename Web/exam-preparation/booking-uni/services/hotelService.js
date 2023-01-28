const Hotel = require('../models/Hotel');
const { findById } = require('../models/User');

module.exports = {
    getAll,
    getSingle,
    deleteSingle,
    createHotel,
    updateHotel,
    bookHotel,
};

async function getAll() {
    return await Hotel.find({}).lean();
}

async function getSingle(id) {
    return await Hotel.findById(id).populate('bookings').lean();
}

async function deleteSingle(id) {
    await Hotel.findByIdAndRemove(id);
}

async function createHotel(data, id) {
    try {
        const hotel = new Hotel({
            name: data.hotel,
            city: data.city,
            freeRooms: Number(data['free-rooms']),
            imageUrl: data.imgUrl,
            owner: id,
        });
        await hotel.save();
    } catch (error) {
        throw error;
    }
}

async function updateHotel(data, id) {
    try {
        const existing = await Hotel.findById(id)
        existing.name = data.hotel
        existing.city = data.city
        existing.freeRooms = data['free-rooms']
        existing.imageUrl = data.imgUrl
        await existing.save()
    } catch (error) {
        throw error;
    }
}

async function bookHotel(hotelId, userId) {
    try {
        const hotel = await Hotel.findById(hotelId);
        hotel.bookings.push(userId);
        await hotel.save();
    } catch (error) {
        throw error;
    }
}
