import React from "react"

const GifDisplay = (props) => {

  return( 
    <img src={props?.gif?.data?.image_url} alt=""/>
   )  
}

export default GifDisplay