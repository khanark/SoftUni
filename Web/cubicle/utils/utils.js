// create difficulty matcher
const difficulties = [
    'Very easy',
    'Easy',
    'Medium (Standard 3x3)',
    'Intermediate',
    'Expert',
    'Hardcore',
];

const cubeViewModel = item => {
    return {
        id: item._id,
        accessories: item.accessories,
        name: item.name,
        description: item.description,
        imageUrl: item.imageUrl,
    };
};

const accessoryViewModel = item => {
    return {
        id: item._id,
        name: item.name,
        description: item.description,
        imageUrl: item.imageUrl,
        cubes: item.cubes,
    };
};

const matchSelected = value => {
    const options = [];
    for (let i = 0; i < difficulties.length; i++) {
        options.push({
            id: i + 1,
            content: `${i + 1} - ${difficulties[i]}`,
            selected: i + 1 == value ? true : false,
        });
    }
    return options;
};

function isLogged() {
    return (req, res, next) => {
        if (!req.session.user) {
            res.redirect('/login');
        } else {
            next();
        }
    };
}

const verifyData = data => {
    return {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        difficulty: Number(data.difficulty),
    };
};

const errorMap = err => {
    if (err.name == 'ValidationError') {
        return Object.values(err.errors).map(e => ({ msg: e.message }));
    } else if (err.name == 'MongoServerError') {
        if (err.code == 11000) {
            return [{ msg: 'Username already exists.' }];
        } else {
            return [{ msg: 'Request error' }];
        }
    } else if (typeof err.message == 'string') {
        return [{ msg: err.message.replace('Error: ', '') }];
    } else {
        return [{ msg: 'Request error' }];
    }
};

module.exports = {
    cubeViewModel,
    matchSelected,
    verifyData,
    accessoryViewModel,
    isLogged,
    errorMap,
};
