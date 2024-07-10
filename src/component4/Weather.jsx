
import { useState} from "react"
import axios from "axios"
import SunCloud from '../Images/SunCloud.png'

function Weather (){
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)


    const DateBuilder= (d)=>{
        let months =["January", "February", "March","April", "May", "June",
        "July", "August", "September", "October", "November", "December"    
        ]
        let days =["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
        ]
        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day},${date}-${month}-${year}`
    }


 const FetchWeatherData = async()=>{
    try{
       
           
         
const Weather = await axios.get(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb4a8cd947dcdbc43239696718d2ac2e`)
 setWeatherData(Weather.data)
     }
     
    catch(error){
console.log(error)
     }
 
    
}
 const handleSubmit = (event) => {
     event.preventDefault();
    
   
        FetchWeatherData(); 
     
     setCity("")
    
  };




    return(
        <>
        <h1 className="Weather-title">Weather App</h1>
        <main className="Weather">
    <img src={SunCloud} alt="sunCloud" className="SunCloud"/>
            <form className="weather-form" onSubmit={handleSubmit}>
<input value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter a city..." />
<button>Get Weather</button>
            </form>
            {weatherData && (
        <div className="weather-container">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}C</p>
         
          <p className="date-builder">{DateBuilder(new Date())}</p>
        </div>
      )}
        </main>
        </>
    )
}
export default Weather