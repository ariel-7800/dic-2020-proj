import React from "react"
import './ConnectHome.css'

class Square extends React.Component{

    render () {
        return (
                <input type="submit" className={this.props.className} onClick={this.props.onClick} value=" "></input>
        )
    }
}

export default Square;