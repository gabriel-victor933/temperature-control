import { useState } from "react"
import "./app.css"

function App() {

  const [color, setColor] = useState({r:200,g:80,b:80})
  const [temp, setTemp] = useState(14)

  function handleChange(op){

    if(temp > 0 && temp < 100){

      const newRGB = {...color}

      newRGB.r = 2.33*temp + 13;
      newRGB.b = 156 - 0.8*temp;

      setColor(newRGB)

    } 

    if(op == "add"){
      setTemp(temp +1)
    } else {
      setTemp(temp -1)
    }
    
  }
  

  return (  
    <div className="control">
      <div className="temp" style={{backgroundColor: `rgb(${color.r},${color.g},${color.b})`}}>
        <h1>{temp}°C</h1>
      </div>
      <div className="btn">
        <button onClick={()=>handleChange("add")}>+</button>
        <button onClick={()=>handleChange("sub")}>-</button>
      </div>

    </div>

  )   
}

export default App
