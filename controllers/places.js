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

  
// router.get('/edit', (req, res) => {
//     res.render('places/new')
//   })


  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id })
    }
  })

  router.get('/:id', (req, res) => {
    res.render('places/show')
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

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
        // above code means if the number doesnt exist in our places array we get 404
    }
    else {
      res.render('places/edit', { place: places[id], id: id })
    }
  })

  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // If no pic we give it place holder
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'NC'
        }
// if no city or state given we get anytown and usa
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  
//   above code / res. render goes to views and then places/edit. it sends place and id. In shows jsx. line 4 (function uses place and id)f

//   just comparing below to above

//   router.get('/:id/edit', (req, res) => {
    // let id = Number(req.params.id)
  
//     if (isNaN(id)) {
//       res.render('error404')
//     } else if (!places[id]) {
//       res.render('error404')
//     } else {
//       res.render('places/edit', { place: places[id] })
//     }
//   })
  
  router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })
  


  
module.exports = router
