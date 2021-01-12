import React, {useState} from "react"
import './App.css';
import GifsDisplay from "./Components/Gifs"
import Button from "./Components/Button"

function App() {

  const apiKey = "4TduPoNgZfh9CHhfJmaACgMI5n6LMW2L"

  const [gif, setGif] = useState(null)

  const getGif = async () => {
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=pg-13`)
  
    const data = await response.json()

    setGif(data)
  }


  return (
    <div className="App">
      <h1>Giphy</h1>
      <Button getGif={getGif}/>
      <GifsDisplay gif={gif}/>
    </div>
  );
}

export default App;
