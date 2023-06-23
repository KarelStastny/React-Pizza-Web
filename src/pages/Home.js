import "./Home.scss"
import React from 'react'
import reference from "../data"
import OurPizza1 from "../images/pizza1.jpg"
import OurPizza2 from "../images/pizza2.jpg"
import OurPizza3 from "../images/pizza3.jpg"

const Home = () => {
  return <body className='home-body'>
    <h2 className="row">Nejlepší Pizzerie v Plzni</h2>
    <p className="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia odio deserunt, molestias aut perferendis libero totam omnis sunt quam molestiae nobis ut fugit optio dolores eius facere alias natus maxime.
    Iste atque amet deserunt illo illum nulla modi dolorum rem quisquam. Rerum, labore esse sapiente obcaecati commodi corrupti. Praesentium aliquam fuga earum repudiandae itaque facilis deleniti sunt, provident cum labore?
    Nemo, delectus nam. Quae possimus quis hic pariatur corporis consequuntur ex deserunt vel ipsam laudantium. Aliquam atque vero id soluta placeat. Quasi eius debitis nihil iusto nam eum maiores magni.
    Quibusdam doloremque, voluptas modi dolore quae nemo a sapiente quos doloribus quas dolor aspernatur officia architecto, soluta omnis nisi necessitatibus tempore obcaecati, optio sit ut laborum. Nulla dicta repellendus assumenda?</p>
    <p className="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam eos ea omnis tenetur deserunt eius sequi nam, alias libero ullam cupiditate facere, tempore deleniti repudiandae. Recusandae sequi magnam optio.
    Placeat eveniet rem, velit pariatur dolorem adipisci ipsum porro veritatis est? Perspiciatis, expedita possimus inventore dicta consectetur id odio voluptate nihil numquam aut ex optio, vitae minus quidem cum maxime.</p>

    <section className="our-pizza">
      <h2>Naše pizza</h2>

      <div className="container-our-pizza row">
          <img src={OurPizza1} />
          <img src={OurPizza2}  />
      </div>
    </section>

    <section className="about-pizza">
      <h2>O naší pizze</h2>
      <div className="cont-about row">
        <img src={OurPizza3}/>
        <div className="about-description">
          <h3>Naše pizza se skládá z:</h3>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus, nemo debitis reprehenderit</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus, nemo debitis reprehenderit</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus, nemo debitis reprehenderit</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus, nemo debitis reprehenderit</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus, nemo debitis reprehenderit</li>
   
     
        </div>
      </div>
    </section>
    
    <section className="all-reference">
    <h2 className="row">Reference našich zákazníků</h2>
    <div className="reference row">

        {
          reference.map( (oneReference) => {
            // const [signaure, id, image, text] = oneReference

            return <div key={oneReference.id} className="one-ref">
                      <img src={oneReference.image} alt={oneReference.signaure} />
                      <h5>Hodnocení</h5>
                      <p>{oneReference.text}</p>
                      <h6>{oneReference.signaure}</h6>
                    </div>
    
          })
          
          }
      
    </div>
    </section>

  </body>
}

export default Home
