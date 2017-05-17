'use strict';

const express = require('express');
const knex = require('../knex');
const humps = require('humps');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('classifieds')
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .then((classifieds) => {
      res.send(classifieds);
    });
});

module.exports = router;
