import ImageGallery from 'react-image-gallery';
import React from 'react'
import "react-image-gallery/styles/scss/image-gallery.scss"
import "./Galerie.scss"

import img1 from "../images/pizza1.jpg"
import img2 from "../images/pizza2.jpg"
import img3 from "../images/pizza3.jpg"
import img4 from "../images/pizza4.jpg"
import img5 from "../images/pizza5.jpg"
import img6 from "../images/pizza6.jpg"

const Galerie = () => {



  return (
    <div className='gallery-slider'>
      <h1>Naše galerie</h1>

      <ImageGallery items={images} 
        slideInterval={500}
      />
    </div>
  )
}

export default Galerie

const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },
  {
    original: img5,
    thumbnail: img5,
  },
  {
    original: img6,
    thumbnail: img6,
  },

];

