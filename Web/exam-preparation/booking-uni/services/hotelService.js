const Hotel = require('../models/Hotel');

module.exports = {
    getAll,
    getSingle,
    deleteSingle,
    createHotel,
    updateHotel,
};

async function getAll() {
    return await Hotel.find({}).lean();
}

async function getSingle(id) {
    return await Hotel.findById(id).lean();
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
        console.log(id);
        console.log(data)
        await Hotel.findByIdAndUpdate(id, data);
    } catch (error) {
        throw error;
    }
}
