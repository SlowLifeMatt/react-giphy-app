import { useState } from 'react'
import Button from './components/Button';
import Display from './components/Display';

import './App.css';
const API = process.env.API
function App() {


  const [gif, setRandomGif] = useState({});
  

  const getRandomGif = async () => {
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=v7R05Si4XfTK7vHKgVGVIlGqWwW3ZLZN&tag=&rating=g`);
    const data = await response.json();

    setRandomGif(data);
  };

  console.log(gif)
  return (
    <div className="App">
<h1>Giphy React App</h1>
<Button getRandomGif={getRandomGif} />
<Display gif={gif} />
    </div>
  );
}

export default App;
