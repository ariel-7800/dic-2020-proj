import React from "react"
import Square from "./Square"
import './ConnectHome.css'

class ConnectHome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            squareArray: [Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square")],
            currentPlayer: "blue"
        }
    }

    handleClick = (i) => {
        const squareArray = this.state.squareArray.slice();
        if (squareArray[0][i] !== "square") {
            return;
        }

        let color;
        if (this.state.currentPlayer === "blue") {
            this.setState({currentPlayer: "red"})
            color = "blueSquare"
        } else {
            this.setState({currentPlayer: "blue"})
            color = "redSquare" 
        }

        let z = true;
        for (let j = 0; j < 6; j++) {
            if (squareArray[j][i] !== "square") {
                z = false
                squareArray[j-1][i] = color;
                break;
            }
        } 
        if (z) {
            squareArray[5][i] = color;
        }

        this.setState({
            squareArray: squareArray
        })

    }

    renderSquares = (i) => {
        return (
            <div className="board-row">
                <Square className = {this.state.squareArray[i][0]} onClick = {() => this.handleClick(0)}/>
                <Square className = {this.state.squareArray[i][1]} onClick = {() => this.handleClick(1)}/>
                <Square className = {this.state.squareArray[i][2]} onClick = {() => this.handleClick(2)}/>
                <Square className = {this.state.squareArray[i][3]} onClick = {() => this.handleClick(3)}/>
                <Square className = {this.state.squareArray[i][4]} onClick = {() => this.handleClick(4)}/>
                <Square className = {this.state.squareArray[i][5]} onClick = {() => this.handleClick(5)}/>
                <Square className = {this.state.squareArray[i][6]} onClick = {() => this.handleClick(6)}/>
            </div>
        )}

    render () {

        return (
            <div>
                <h1>Welcome to Connect4</h1>
                {this.renderSquares(0)}
                {this.renderSquares(1)}
                {this.renderSquares(2)}
                {this.renderSquares(3)}
                {this.renderSquares(4)}
                {this.renderSquares(5)}
            </div>
        )
    }
}

export default ConnectHome;