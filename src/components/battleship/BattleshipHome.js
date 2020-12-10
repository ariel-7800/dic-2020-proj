import React from "react"
import Square from "./Square"

class BattleshipHome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            pOneArray: Array(25).fill(null),
            pTwoArray: Array(25).fill(null),
            pOneIsNext: true,
            pOneShips: 0,
            pTwoShips: 0
            
        };
    }

    startGame = (event) => {
        event.preventDefault();
        this.setState({
            gameStarted: true
        });
    }

    handleP1Click = (i) => {
        const pOneArray = this.state.pOneArray.slice();

        if (this.state.pOneShips >= 5 || pOneArray[i]) {
            return;
        }
        
        pOneArray[i] = "X";
        this.setState({
            pOneArray: pOneArray,
            pOneShips: this.state.pOneShips + 1
        })
    }

    handleP2Click = (i) => {
        const pTwoArray = this.state.pTwoArray.slice();

        if (this.state.pTwoShips >= 5 || pTwoArray[i]) {
            return;
        }
        
        pTwoArray[i] = "X";
        this.setState({
            pTwoArray: pTwoArray,
            pTwoShips: this.state.pTwoShips + 1
        })
    }

    renderP1Squares = (i) => {
        return (
            <Square 
                value = { this.state.pOneArray[i] } 
                onClick = {() => this.handleP1Click(i)}
            />
        );
    }

    renderP2Squares = (i) => {
        return (
            <Square 
                value = { this.state.pTwoArray[i] } 
                onClick = {() => this.handleP2Click(i)}
            />
        );
    }

    render () {

        const status = "Next Player: " + ( this.state.pOneIsNext ? "Player 1" : "Player 2" );

        return (
            <div>
                {
                    this.state.gameStarted ?
                        <div>
                            <h3>{ status }</h3>
                            <h3>Player 1</h3>
                            <div className="board-row">
                                { this.renderP1Squares(0) }
                                { this.renderP1Squares(1) }
                                { this.renderP1Squares(2) }
                                { this.renderP1Squares(3) }
                                { this.renderP1Squares(4) }
                            </div>

                            <div className="board-row">
                                { this.renderP1Squares(6) }
                                { this.renderP1Squares(7) }
                                { this.renderP1Squares(8) }
                                { this.renderP1Squares(9) }
                                { this.renderP1Squares(10) }
                            </div>

                            <div className="board-row">
                                { this.renderP1Squares(11) }
                                { this.renderP1Squares(12) }
                                { this.renderP1Squares(13) }
                                { this.renderP1Squares(14) }
                                { this.renderP1Squares(15) }
                            </div>

                            <div className="board-row">
                                { this.renderP1Squares(16) }
                                { this.renderP1Squares(17) }
                                { this.renderP1Squares(18) }
                                { this.renderP1Squares(19) }
                                { this.renderP1Squares(20) }
                            </div>

                            <div className="board-row">
                                { this.renderP1Squares(21) }
                                { this.renderP1Squares(22) }
                                { this.renderP1Squares(23) }
                                { this.renderP1Squares(24) }
                                { this.renderP1Squares(25) }
                            </div>
                            

                            <h3>Player 2</h3>
                            <div className="board-row">
                                { this.renderP2Squares(0) }
                                { this.renderP2Squares(1) }
                                { this.renderP2Squares(2) }
                                { this.renderP2Squares(3) }
                                { this.renderP2Squares(4) }
                            </div>

                            <div className="board-row">
                                { this.renderP2Squares(6) }
                                { this.renderP2Squares(7) }
                                { this.renderP2Squares(8) }
                                { this.renderP2Squares(9) }
                                { this.renderP2Squares(10) }
                            </div>

                            <div className="board-row">
                                { this.renderP2Squares(11) }
                                { this.renderP2Squares(12) }
                                { this.renderP2Squares(13) }
                                { this.renderP2Squares(14) }
                                { this.renderP2Squares(15) }
                            </div>

                            <div className="board-row">
                                { this.renderP2Squares(16) }
                                { this.renderP2Squares(17) }
                                { this.renderP2Squares(18) }
                                { this.renderP2Squares(19) }
                                { this.renderP2Squares(20) }
                            </div>

                            <div className="board-row">
                                { this.renderP2Squares(21) }
                                { this.renderP2Squares(22) }
                                { this.renderP2Squares(23) }
                                { this.renderP2Squares(24) }
                                { this.renderP2Squares(25) }
                            </div>
                        </div>
                    :
                        <div>
                            <header><h1>Welcome to Battleship!</h1></header>
                            <input type="submit" className="startGame" onClick={ this.startGame } value="Start Game"></input>
                        </div>
                }
            </div>
        )
    }
}

export default BattleshipHome;