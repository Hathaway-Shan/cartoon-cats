const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = Router();

router
  .get('/', (req, res) => {
    console.log(cats);
    const cat = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cat);
  });

module.exports = router;


