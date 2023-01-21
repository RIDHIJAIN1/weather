import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect,useState} from "react";
import './App.css';
import axios from "axios";

function App() {

 const apiKey = "1834770c16f60be71abb20c5b41dbcbc"
 const [ inputCity , setInputCity] = useState("")
 const [data, setData] = useState({})

 const getWeatherDetails = (cityName)=>{

  if (!cityName) return
  const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&APPID=" + apiKey
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
    setData(res.data)

  }).catch((err)=>{
    console.log("err",err)
  })
 }

 const handleChangeInput = (e) =>{
  setInputCity(e.target.value)
 }

 const handleSearch =()=> {
  getWeatherDetails(inputCity)
 }
//  const handleChangeCelsius =()=> {
//   getWeatherDetails(inputCelsius)
//  }

 useEffect(() => {
 getWeatherDetails("mumbai")
 }, [])

  return (
    <div className = "col-md-12">
    <div className = "weatherBg">
  <h1 className="head">Weather App</h1>

  <div className = "d-grid gap-3 col-4 mt-4">
  <input type = "text" className="form-control"value={inputCity}onChange={handleChangeInput}/>
  <button className= "btn btn-primary" type="button"onClick={handleSearch}>Search</button>
  </div>
  {/* <div className = "d-grid gap-2 col-2 mt-2">
  <input type = "number"id="celsius" className="form-control"value={inputCelsius}onChange={handleChangeCelsius}onInput="celToFar()"/>
  <button className= "btn btn-primary" type="button"onClick={handleSearch}>Convert</button>
  </div> */}
  {/* <div style = "display : flex"className = "d-grid gap-2 col-2 mt-2"> 
  <input type = "number" className="form-control"value={inputCelsius}onChange={handleChangeCelsius}/>
 
  </div> */}
   {/* <script src="script.js"></script> */}
  <div className="col-md-12 text-center mt-5">
  <div className="shadow">
    <img className="weathericon" src = "https://cdn-icons-png.flaticon.com/512/1779/1779940.png"alt="img"/>
    <h4 className="weatherCity">{data.name}</h4>
    <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)} °C</h6>
  </div>


  </div>

 
  </div>
  </div>
  );
}

export default App;
