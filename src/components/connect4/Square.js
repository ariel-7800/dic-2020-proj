import React from "react"
import './ConnectHome.css'

class Square extends React.Component{

    render () {
        return (
                <div className={this.props.className} onClick={this.props.onClick}/>
        )
    }
}

export default Square;