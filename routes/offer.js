const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all offers. */
router.get('/', (req, res, next) => {
  // res.send('Get all offers')
  // select name from offer;
  knex('offer')
    .select('name')
    .then((rows) => res.json(rows))
})

// GET a single offer
router.get('/:id', (req, res, next) => {
  res.send('GET a single offer')
})

// POST a new offer
router.post('/', (req, res, next) => {
  res.send('POST a new offer')
})

// DELETE an offer
router.delete('/:id', (req, res, next) => {
  res.send('DELETE an offer')
})

// UPDATE an offer
router.patch('/:id', (req, res, next) => {
  res.send('PATCH an offer')
})

module.exports = router
