import React from 'react';
import "../assets/css/style.css";
import { Table } from 'reactstrap';

class Weather extends React.Component{
    constructor(props){
        super();
        this.state = {
        datas:[],
        isFetching: false,
        }
    }

    componentDidMount(){
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        fetch('http://api.openweathermap.org/data/2.5/forecast?lat=10.4103&lon=123.8802&id=524901&APPID=57e29dbfe616ba8781b2f902f07c1c51&units=metric')
        .then(result => result.json())
       
        .then(resultJSON => {
          console.log(resultJSON)
          this.setState({
            datas: resultJSON,
            isFetching: true,
          })
        });
    }
    render(){
        var { isFetching, datas} = this.state;
        if(!isFetching){
            return <div>loading...</div>
        }
        else{
            return(
            
                    <div className=" weather1 content ">
                    <h1 className="location1">Barangay Sirao 5 Days Weather Forecast</h1>
                    <div className="limiter">
                        <div className="container-table100">
                            <div className="wrap-table100">
                                <div className="table100">
                            
                                    <table className="customers">
                                    <thead>
                                        <tr>
                                            <th>Time and Date</th>
                                            <th>Temperature</th>
                                            <th >Feels Like</th>
                                            <th>Pressure</th>
                                            <th>Humidity</th>
                                            <th>Wind Speed</th>
                                           
                                        </tr>
                                    </thead>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                        {datas.list.map(data => (
                        <div className="tablebody">
                                <Table>
                                  
                                    <tbody>
                                        <tr>
                                            <td>{data.dt_txt}</td>
                                            <td  key={data.id}>{data.main.temp} {'\u00b0'} C</td>
                                            <td className="tableWeather">{data.main.feels_like} {'\u00b0'} C</td>
                                            <td>{data.main.pressure} mbar</td>
                                            <td>{data.main.humidity} %</td>
                                            <td>{data.wind.speed} Km/h</td>
                                           
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            ))}
                            </div>
                
          
                
            );
        }
    }
}

export default Weather;