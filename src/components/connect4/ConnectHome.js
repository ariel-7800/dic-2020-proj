import React from "react"
import Square from "./Square"
import './ConnectHome.css'

class ConnectHome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            squareArray: [Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square")],
            currentPlayer: "blue",
            gameWinner: false,
            gamesWonRed: 0,
            gamesWonBlue: 0,
        }
    }

    checkWinner = (i, j) => {
        const squareArray = this.state.squareArray;
        for (let i2 = -3; i2 < 1; i2++) {
            if (i2 + i > -1 && i2 + i + 3 < 6) {
                if (squareArray[i + i2][j] === squareArray[i2 + i + 1][j]
                    && squareArray[i + i2][j] === squareArray[i2 + i + 2][j] 
                    && squareArray[i + i2][j] === squareArray[i2 + i + 3][j]) {
                        squareArray[i][j] === "blueSquare" ? 
                        this.setState({gameWinner: "blue", gamesWonBlue: this.state.gamesWonBlue + 1}) 
                        : this.setState({gameWinner: "red", gamesWonRed: this.state.gamesWonRed + 1});
                        return;
                    }
            }
            if (i2 + j > -1 && i2 + j + 3 < 7) {
                if (squareArray[i][j + i2] === squareArray[i][j + i2 + 1]
                    && squareArray[i][j + i2] === squareArray[i][j + i2 + 2] 
                    && squareArray[i][j + i2] === squareArray[i][j + i2 + 3]) {
                        squareArray[i][j] === "blueSquare" ? 
                        this.setState({gameWinner: "blue", gamesWonBlue: this.state.gamesWonBlue + 1}) 
                        : this.setState({gameWinner: "red", gamesWonRed: this.state.gamesWonRed + 1});
                        return;
                    }
            }
            if (i2 + j > -1 && i2 + j + 3 < 7 && i2 + i > -1 && i2 + i + 3 < 6) {
                if (squareArray[i + i2][j + i2] === squareArray[i + i2 + 1][j + i2 + 1]
                    && squareArray[i + i2][j + i2] === squareArray[i + i2 + 2][j + i2 + 2] 
                    && squareArray[i + i2][j + i2] === squareArray[i + i2 + 3][j + i2 + 3]) {
                        squareArray[i][j] === "blueSquare" ? 
                        this.setState({gameWinner: "blue", gamesWonBlue: this.state.gamesWonBlue + 1}) 
                        : this.setState({gameWinner: "red", gamesWonRed: this.state.gamesWonRed + 1});
                        return;
                    }
            }
            if (i2 + j > -1 && i2 + j + 3 < 7 && - i2 + i - 3 > -1 && - i2 + i < 6) {
                if (squareArray[i][j] === squareArray[i - i2][j + i2]
                    && squareArray[i][j] === squareArray[i - i2 - 1][j + i2 + 1] 
                    && squareArray[i][j] === squareArray[i - i2 - 2][j + i2 + 2]
                    && squareArray[i][j] === squareArray[i - i2 - 3][j + i2 + 3]) {
                        squareArray[i][j] === "blueSquare" ? 
                        this.setState({gameWinner: "blue", gamesWonBlue: this.state.gamesWonBlue + 1}) 
                        : this.setState({gameWinner: "red", gamesWonRed: this.state.gamesWonRed + 1});
                        return;
                    }
            }
        }

        return false;
    }

    startAgain = () => {
        let currentPlayer = "red"
        if ((this.state.gamesWonBlue + this.state.gamesWonRed) % 2 === 0) {
            currentPlayer = "blue"
        }
        this.setState({
            squareArray: [Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square"),Array(7).fill("square")],
            currentPlayer: currentPlayer,
            gameWinner: false,
        })
    }

    handleClick = (i) => {
        if (this.state.gameWinner) {
            return
        }

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
                this.checkWinner(j-1,i);
                break;
            }
        } 
        if (z) {
            squareArray[5][i] = color;
            this.checkWinner(5,i)
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
                <h1 className = "main-header">Welcome to Connect4</h1>
                {
                    this.state.gameWinner === false ? 
                    <h2 className= "turn-header">It is {this.state.currentPlayer}'s turn</h2>
                    :
                    <h2 className= "winner-header">Congratulations {this.state.gameWinner}!</h2>
                }
                <div className="main-board">
                {this.renderSquares(0)}
                {this.renderSquares(1)}
                {this.renderSquares(2)}
                {this.renderSquares(3)}
                {this.renderSquares(4)}
                {this.renderSquares(5)}
                </div>
                <div className="lower-bar">
                    <p>Games won by blue: {this.state.gamesWonBlue}</p>
                    <p>Games won by red: {this.state.gamesWonRed}</p>
                    <input type="submit" value="Start Again" onClick={() => this.startAgain()}></input>
                </div>
            </div>
        )
    }
}

export default ConnectHome;