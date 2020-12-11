import React from "react"
import './ConnectHome.css'

class Square extends React.Component{

    render () {
        return (
                <div className={this.props.className} onClick={this.props.onClick} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}/>
        )
    }
}

export default Square;