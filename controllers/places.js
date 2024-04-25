const router = require('express').Router()
const places = require('../models/place.js')
// GET /places

// place holder for posting wont load


router.get('/', (req, res) => {
    res.render('places/index', {places})
})


router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
       if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/200/300'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })


  
module.exports = router
