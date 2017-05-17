'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .then((classifieds) => {
      res.send(classifieds);
    });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .where('id', id)
    .then((classifieds) => {
      res.send(classifieds[0]);
    });
})

module.exports = router;
