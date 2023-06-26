import React from 'react'
import nabidka from '../data-nabidka'
import Nabidka from "../pages/Nabidka"
import { useParams } from "react-router-dom"
import "./NabidkaOne.scss"
import {Link} from "react-router-dom"

const NabidkaOne = () => {

    // Zjistí mi ID za lomítkem 
 const { nabidkaId } = useParams()

//  console.log(useParams());
    const findnabidka = nabidka.find( (one) => {
        // vrať jen ten výsledek který se schoduje 
        // to co je v url za lomítkem a id z dat
        return one.id === parseInt(nabidkaId)
    })

    const {name, text, image, time, materials, cost, }  = findnabidka

  return <section  className='section-one-pizza row'>

    <div className="container-one-pizza">
        <img src={image} alt={name} />
        
      
        <div className="one-pizza-description">
            <h2>{name}</h2>
            <h3>Popis:</h3>
            <p>{text}</p>
            <p>Použité ingredience: {materials}</p>
            <p>Čas přípravy: {time} minut</p>
            <p>Cena {cost} €</p>
            <Link to="/nabidka">Zpět na nabídku</Link>

        </div>
    </div>
  </section>
}

export default NabidkaOne
