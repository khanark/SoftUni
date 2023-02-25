module.exports = {
    userViewModel,
    validateUser,
    validateCourse,
};

function userViewModel(user, token) {
    if (Array.isArray(user)) {
        return user.map(singleUser => {
            const { _id, username, email, isBanned, role, photo, token } =
                singleUser;
            return Object.assign(
                {},
                { _id, username, email, isBanned, role, photo, token }
            );
        });
    }
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
    if (!Boolean(user)) {
        throw new Error("User doesn't exist in the database", { cause: 404 });
    }
    return userViewModel(user);
}

function validateCourse(course) {
    if (!Boolean(course)) {
        throw new Error("Course doesn't exist in the database", { cause: 404 });
    }
    return course;
}
