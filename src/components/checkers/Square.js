import React from "react"
import './Checkers.css'

class Square extends React.Component{

    render () {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
            {
                this.props.color !== "null"? 
                <div className= {"checkers-circle " + this.props.color} />
                :
                <div/>
            }
            </div>
        )
    }
}

export default Square;