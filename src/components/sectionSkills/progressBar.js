import React from 'react'



class ProgressBar extends React.Component {
    render(){
        
        return (


                <div className={this.props.outer} >
                    <div className='inner'>
                        <h3>{this.props.percent}</h3>
                        <h4>{this.props.skillName}</h4>
                    </div>
                </div>
            
        )
    }
}

export default ProgressBar 


