
const React = require('react')
const Def = require('../default')


function show ({place}) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
 
  if (place.comments.length) {
    let sumRatings = place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += 'â­ï¸'
    }
    rating = (
      <h3>
       {stars} stars
      </h3>
    )
         
    comments = place.comments.map(c => {
      return (
        <div className="border" key={c._id}>
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={place.pic} alt={place.name} />
              <h3>
                Located in {place.city}, {place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h2>Rating</h2>
              {rating}
              <h3>
                Not Rated
              </h3>
              <h2>
                Description
              </h2>
              <h3>
                {place.showEstablished()}
              </h3>
              <h4>
                Serving {place.cuisines}
              </h4>
              <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">Delete</button>
              </form>
            </div>
            <div className="col-sm-12">
                <h2>
                  Comments
                </h2>
                <h3>
                  { comments ? comments : "No Comments" }
                </h3>
              </div>
          </div>
        </main>
      </Def>
    )
}

module.exports = show





