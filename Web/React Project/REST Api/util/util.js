module.exports = {
    userViewModel,
};

function userViewModel(user, token) {
    const { _id, username, email, isBanned, role, photo } = user;
    return { _id, username, email, isBanned, role, photo, token };
}
