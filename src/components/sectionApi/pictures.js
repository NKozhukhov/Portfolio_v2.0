import React from 'react'
import "../../style/main.sass"
import axios from 'axios'

const basicUrl = "https://dog.ceo/api/breeds/image/random"

class Pictures extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            message: ["https://images.dog.ceo/breeds/hound-ibizan/n02091244_5400.jpg"],
    }
    }   

    
    render(){
        return (

            
            <div className="pictures-container">
                <h3>Pictures</h3>
                <button onClick={() => {axios.get(basicUrl).then((res) => {
                    this.setState({message: res.data.message})
                })}}>
                    Следующая</button>
                <div className='pictures-box'>
                    <img src={this.state.message}></img>
                </div>
            </div>
        )

}
}



export default Pictures 