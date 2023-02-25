module.exports = {
    userViewModel,
    validateUser,
};

function userViewModel(user, token) {
    const { _id, username, email, isBanned, role, photo } = user;
    return {
        _id,
        username,
        email,
        isBanned,
        role,
        photo,
        token,
    };
}

function validateUser(user) {
    if (!user) {
        throw new Error("User doesn't exist in the database", { cause: 404 });
    }
    return userViewModel(user);
}
