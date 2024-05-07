const React = require('react')
const Def = require('../default.jsx')

function edit_form ({place, id}) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${place.id}?_method=PUT`}>

                <div className="row">
                    
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" 
                        id="founded" 
                        name="founded" 
                        value={place.founded} 
                        />
                    </div>
   
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input type="text"
                            name="name"
                            id="name"
                            required
                            defaultValue={place.name} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place City</label>
                        <input id="city" type="text"
                            name="city"
                            required
                            defaultValue={place.city} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place State</label>
                        <input id="state" type="text"
                            name="state"
                            required
                            defaultValue={place.state} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" type="text"
                            name="pic"
                            required
                            defaultValue={place.pic} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Cuisines</label>
                        <input id="cuisines" type="text"
                            name="cuisines"
                            required
                            defaultValue={place.cuisines} />
                    </div>
                </div>
                <input type="submit"/>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form


   
