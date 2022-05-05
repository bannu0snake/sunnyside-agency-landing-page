import React from 'react'
import classes from "./Images.module.css"
import image1 from "../images/desktop/image-gallery-cone.jpg"
import image2 from "../images/desktop/image-gallery-milkbottles.jpg"
import image3 from "../images/desktop/image-gallery-orange.jpg"
import image4 from "../images/desktop/image-gallery-sugarcubes.jpg"
const Images = () => {
  return (
    <div className={classes.images}>
        <img className={classes.image} src={image2} alt=''>
        </img>
        <img className={classes.image} src={image3} alt=''>
        </img>
        <img className={classes.image} src={image1} alt=''>
        </img>
        <img className={classes.image} src={image4} alt=''>
        </img>
    </div>
  )
}

export default Images