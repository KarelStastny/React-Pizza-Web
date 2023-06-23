import React from 'react'
import data from "../data-nabidka"
import "./Nabidka.scss"
import { Link } from "react-router-dom"

const Nabidka = () => {
  return <section className='nabidka row'>
    <h2>Naše pizzy co si můžete objednat</h2>
    
        <div className="nabidka-container">
            {
                data.map( (one) => {
                    const {id, name, cost, image} = one

                    return <div key={id} className="n-card">
                        <img src={image} alt={name} />
                        <div className="n-card-description">
                            <p>{name}</p>
                            <p className='nabidkac-cost'>{cost} €</p>
                            
                        </div>
                        <Link to={`/polozky/${id}`}>Více informací</Link>
                    </div>
                    
                })
            }
        </div>
    

  </section>
}

export default Nabidka
