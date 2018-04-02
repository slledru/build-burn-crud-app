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
  const { id } = req.params
  knex('offer')
    .select('name')
    .where('id', id)
    .then((rows) => {
      if (rows.length > 0) {
        res.json(rows)
      }
      else {
        res.sendStatus(404)
      }
    })
})

// POST a new offer
router.post('/', (req, res, next) => {
  const { name } = req.body
  knex('offer')
    .insert([
      { name: name }
    ])
    .returning('id')
    .then((rows) => {
      res.status(201).json(rows)
    })
})

// DELETE an offer
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  knex('offer')
    .del()
    .where('id', id)
    .returning('id')
    .then((rows) => {
      if (rows.length > 0) {
        res.json(rows)
      }
      else {
        res.sendStatus(404)
      }
    })
})

// UPDATE an offer
router.patch('/:id', (req, res, next) => {
  res.send('PATCH an offer')
})

module.exports = router
