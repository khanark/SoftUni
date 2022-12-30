const fs = require('fs/promises');
const path = require('path');
const formidable = require('formidable');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('create', { title: 'Create New Cat' });
});

router.post('/', async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    const file = files.upload;
    const oldPath = file.filepath;

    const newPath = path.join(
      process.cwd(),
      'uploads' + '/' + file.originalFilename
    );

    const rawData = await fs.readFile(oldPath);
    if (file.size) {
      await fs.writeFile(newPath, rawData, err => {
        if (err) {
          return;
        }
      });

      const cat = {
        name: fields.name,
        description: fields.description,
        breed: fields.breed,
        image: file.originalFilename,
      };

      await req.storage.createCat(cat);
      res.redirect('/');
    } else {
      res.status(500).send({ err: 'please fill all the empty fields' });
    }
  });
});

module.exports = router;
