import React from "react"

const Button = (props) => {

const handleClick = (event) => {
    event.preventDefault();
    props.getGif()
}

  return( 
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>
   )  
}

export default Button