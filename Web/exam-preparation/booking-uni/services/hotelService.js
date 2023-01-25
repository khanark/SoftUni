const Hotel = require('../models/Hotel');

module.exports = {
    getAll,
    getSingle,
    deleteSingle,
    createHotel,
};

async function getAll() {
    return await Hotel.find({});
}

async function getSingle(id) {
    return await Hotel.findById(id);
}

async function deleteSingle(id) {
    await Hotel.findByIdAndRemove(id);
}

async function createHotel(data, id) {
    console.log('I am inside createHotel function');
    console.log(data);
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
