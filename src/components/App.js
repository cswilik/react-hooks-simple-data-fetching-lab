import React, { useState, useEffect} from "react";

function App() {
    const [ dogImg, setdogImg] = useState(null)
    
    

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(data => {
    setdogImg(data.message)
})
}, [])

if (!dogImg) return <h3>Loading...</h3>;

return (
    <img alt="A Random Dog"src ={dogImg}/>
)
     


}

export default App;