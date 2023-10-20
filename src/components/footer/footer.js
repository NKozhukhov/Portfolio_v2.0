import React from 'react'
import "../../style/main.sass"

class Footer extends React.Component {
    render(){
        return (
            <footer class="footer">
                <div className='footer-text'>
                    <p>Copyright &copy; 2023 by Me | All Rights Reserved.</p>
                </div>
                <div className='footer-icon'>
                    <a href="#home">
                        <i className='bx bxs-up-arrow-circle'></i>
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer 