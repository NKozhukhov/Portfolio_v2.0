import React from 'react'
import "../../style/main.sass"


class Weather extends React.Component {
    render(){
        return (
            <div className="weather-container">
                <h3>Weather</h3>
                <div className='weather-box'>
                    <div className="weather-block">
                        <p className='city'></p>
                        <p className='date'></p>
                        <div className='weather-img'></div>
                        <p className='temperature'></p>
                        <p className='status'></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather 