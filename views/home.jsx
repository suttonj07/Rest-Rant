const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
              <h1 className="home">Home</h1>
              <div>
                <img src="/images/chia-fruit-drink (1).jpg" alt="Chia Fruit Shake"/>
               <div>
               Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
             </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
    )
  }
  
module.exports = home


