import React from 'react'
import "../../style/main.sass"


class Map extends React.Component {
    render(){
        return (
            <div className="map-container">
                <h3>Map</h3>
                <div className='map-box' id="map">
                </div>
            </div>
        )
    }
}

export default Map 