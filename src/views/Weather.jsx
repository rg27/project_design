import React from "react"
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';


class Weather extends React.Component{
    render(){
        return(
            <div>
                <ReactWeather
                forecast="5days"
                apikey="57e29dbfe616ba8781b2f902f07c1c51"
                type="city"
                city="Munich"/>
            </div>
        )
    }
}
export default Weather