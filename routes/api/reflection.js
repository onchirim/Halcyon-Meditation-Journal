const express = require('express');
const router = express.Router();

//Reflection Model
const Reflection = require('../../models/reflection');

//gets all items in api/reflections

router.get('/', (req, res) => {
  Reflection.find()
    .sort({ date: -1 })
    .then((reflections) => res.json(reflections));
});

//creates new post in api/reflections

router.post('/', (req, res) => {
  const newReflection = new Reflection({
    name: req.body.name,
  });
  newReflection.save().then((reflection) => res.json(reflection));
});

//deletes relection in /api/reflection

router.delete('/:id', (req, res) => {
  Reflection.findById(req.params.id)
    .then((reflection) =>
      reflection.remove().then(() => res.json({ sucess: true }))
    )
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
