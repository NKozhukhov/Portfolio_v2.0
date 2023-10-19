import React from 'react'
import "../../style/main.sass"
import axios from 'axios'

const url = "https://api.openweathermap.org/data/2.5/weather?q=moscow,ru&appid=cd4ba4b6c271c357674c856245416fbe&lang=ru"
const date = new Date();
const month = date.toLocaleString('ru-RU', { month: 'long' });
const day = date.getUTCDate() + 1;
const newdate = month + ", " + day;

class Weather extends React.Component {
    constructor(props) {
        super(props)
        axios.get(url).then((res) => {
            this.setState({name: res.data.name, icon: res.data.weather[0]['icon'], temp: res.data.main.temp, description: res.data.weather[0]['description']})
        })

        this.state = {
            name: [],
            date: [],
            icon: [],
            temp: [],
            description: []
    }
    }   


    render(){
        return (

            
            <div className="weather-container">
                <h3>Weather</h3>
                <div className='weather-box'>
                    <div className="weather-block">
                        <p className='city'>{this.state.name}</p>
                        <p className='date'>{newdate}</p>
                        <div className='weather-img'><img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`}></img></div>
                        <p className='temperature'>{Math.round(this.state.temp -273)}&deg;</p>
                        <p className='status'>{this.state.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather 