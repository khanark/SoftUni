const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/user_photos'),
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original file name
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        // Check file type
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    },
});
module.exports = upload;
