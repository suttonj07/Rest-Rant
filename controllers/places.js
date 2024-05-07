const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  console.log(req.body);
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if (err && err.name == 'ValidationError') {
          let message = "Validation Errors: ";

          if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += ` ${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            console.log('Validation error message', message)
            res.render('places/new', { message })
          }
          else {
              res.render('error404')
          }

          res.render('places/new', { message });
      }
      else {
          res.render('error404')
      }
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// router.get('/:id/comment', (req, res) => {
//   console.log(req.body);
//   db.Place.findById(req.params.id)
//     .then(place => {
//       res.render('places/newcomment', { place });
//     })
// })
// router.post('/:id/comment', (req, res) => {
//   console.log(req.body)
//   req.body.rant = req.body.rant ? true : false
//   res.send('GET /places/:id/comment stub')
// })


router.post('/:id/comment', (req, res) => {
    console.log("!!!!!!!!!!!!!!")
    console.log(req.body)
    db.Place.findById(req.params.id)
      .then(place => {
        console.log("Place to add comment:")
        console.log(place)
        db.Comment.create(req.body)
          .then(comment => {
            console.log("New comment:")
            console.log(comment)
            place.comments.push(comment.id)
            place.save()
            .then(() => {
             res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
  })


  router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

// stubs tell you that youve hit the endpoint even though it wont do the logic



// const router = require('express').Router()
// const places = require('../models/place.js')
// // GET /places

// // place holder for posting wont load


// router.get('/', (req, res) => {
//     res.render('places/index', {places})
// })


// router.get('/new', (req, res) => {
//     res.render('places/new')
//   })

  
// // router.get('/edit', (req, res) => {
// //     res.render('places/new')
// //   })


//   router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       res.render('places/show', { place: places[id], id })
//     }
//   })

//   router.get('/:id', (req, res) => {
//     res.render('places/show')
//   })
  
//   router.post('/', (req, res) => {
//     if (!req.body.pic) {
//    // Default image if one is not provided
//    req.body.pic = 'http://placekitten.com/200/300'
//  }
//  if (!req.body.city) {
//    req.body.city = 'Anytown'
//  }
//  if (!req.body.state) {
//    req.body.state = 'USA'
//  }
//  places.push(req.body)
//  res.redirect('/places')
// })

// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//         // above code means if the number doesnt exist in our places array we get 404
//     }
//     else {
//       res.render('places/edit', { place: places[id], id: id })
//     }
//   })

//   router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // If no pic we give it place holder
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'NC'
//         }
// // if no city or state given we get anytown and usa
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
//   })
  
// //   above code / res. render goes to views and then places/edit. it sends place and id. In shows jsx. line 4 (function uses place and id)f

// //   just comparing below to above

// //   router.get('/:id/edit', (req, res) => {
//     // let id = Number(req.params.id)
  
// //     if (isNaN(id)) {
// //       res.render('error404')
// //     } else if (!places[id]) {
// //       res.render('error404')
// //     } else {
// //       res.render('places/edit', { place: places[id] })
// //     }
// //   })
  
//   router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       places.splice(id, 1)
//       res.redirect('/places')
//     }
//   })
  


  
// module.exports = router
