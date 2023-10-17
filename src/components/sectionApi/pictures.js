import React from 'react'
import "../../style/main.sass"

class Pictures extends React.Component {
    render(){
        return (
            <div className="pictures-container">
                <h3>Pictures</h3>
                <button>Следующая</button>
                <div className='pictures-box'>
                    <img></img>
                </div>
            </div>
        )
    }
}

export default Pictures 