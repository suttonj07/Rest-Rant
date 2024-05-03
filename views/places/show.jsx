// const React = require('react')
// const Def = require('../default')

// function new_form (data) {
//   let message = ''                 
//     if (data.message) {
//       message = (
//         <h4 className="alert-danger">
//           {data.message}
//         </h4>
//       )
//     }
//     return (
//        <Def>
//           <main>
//             <h1>Add a New Place</h1>
//             {message}          
//           <div className="row">
//             <div className="col-sm-6">
//               <img src={place.pic} alt={place.name} />       getting error place isnt defined, but homework wants us to change function at top
//               <h3>
//                 Located in {place.city}, {place.state}
//               </h3>
//             </div>
//             <div className="col-sm-6">
//               <h2>Rating</h2>
//               <h3>
//                 Not Rated
//               </h3>
//               <h2>
//                 Description
//               </h2>
//               <h3>
//                 {place.showEstablished()}
//               </h3>
//               <h4>
//                 Serving {place.cuisines}
//               </h4>
//               <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
//               <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
//                   <button type="submit" className="btn btn-danger">Delete</button>
//               </form>
//             </div>
//             <div className="col-sm-12">
//                 <h2>
//                   Comments
//                 </h2>
//                 <h3>
//                   No Comments
//                 </h3>
//               </div>
//           </div>
//         </main>
//       </Def>
      
//     )
  
// }


// module.exports = new_form


const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''                 
      if (data.message) {
        message = (
          <h4 className="alert-danger">
            {data.message}
          </h4>
        )
      }}

function show ({place}) {
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
                  No Comments
                </h3>
              </div>
          </div>
        </main>
      </Def>
    )
}

module.exports = show
module.exports = new_form