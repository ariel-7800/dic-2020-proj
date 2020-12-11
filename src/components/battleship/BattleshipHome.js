import React from "react"
import Square from "./Square"
import Board from "./Board"

class BattleshipHome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            p1LocationArray: Array(25).fill(null),
            p2LocationArray: Array(25).fill(null),
            p1IsNext: true,
            p1Ships: 0,
            p2Ships: 0,
            p1AttackArray: Array(25).fill(null),
            p2AttackArray: Array(25).fill(null),
            p1Hit: 0,
            p2Hit: 0
        };
    }

    startGame = (event) => {
        event.preventDefault();
        if (this.state.p1Ships !== 5 || this.state.p2Ships !== 5) {
            return;
        }
        this.setState({
            gameStarted: true
        });
    }
    
    renderP1SquaresInitial = (i) => {
        return (
            <Square 
                value = { this.state.p1LocationArray[i] } 
                onClick = {() => this.handleP1ClickInitial(i)}
            />
        );
    }

    renderP2SquaresInitial = (i) => {
        return (
            <Square 
                value = { this.state.p2LocationArray[i] } 
                onClick = {() => this.handleP2ClickInitial(i)}
            />
        );
    }

    handleP1ClickInitial = (i) => {
        const p1LocationArray = this.state.p1LocationArray.slice();
        const selectedSquare = p1LocationArray[i];

        if (this.state.p1Ships >= 5 && (selectedSquare === null)) {
            return;
        }

        p1LocationArray[i] = selectedSquare === null ? "X" : null;
        const shipsCount = selectedSquare === null ? 1 : -1;
        this.setState({
            p1LocationArray: p1LocationArray,
            p1Ships: this.state.p1Ships + shipsCount
        })
    }
    
    handleP2ClickInitial = (i) => {
        const p2LocationArray = this.state.p2LocationArray.slice();
        const selectedSquare = p2LocationArray[i];

        if (this.state.p2Ships >= 5 && (selectedSquare === null)) {
            return;
        }
        
        p2LocationArray[i] = selectedSquare === null ? "X" : null;
        const shipsCount = selectedSquare === null ? 1 : -1;
        this.setState({
            p2LocationArray: p2LocationArray,
            p2Ships: this.state.p2Ships + shipsCount
        })
    }

    renderP1SquaresInGame = (i) => {
        return (
            <Square 
                value = { this.state.p1AttackArray[i] } 
                onClick = {() => this.handleP1ClickInGame(i)}
            />
        );
    }

    renderP2SquaresInGame = (i) => {
        return (
            <Square 
                value = { this.state.p2AttackArray[i] } 
                onClick = {() => this.handleP2ClickInGame(i)}
            />
        );
    }

    handleP1ClickInGame = (i) => {

        const p1AttackArray = this.state.p1AttackArray.slice();

        if (!this.state.p1IsNext || p1AttackArray[i] || this.determineWinner()) {
            return;
        }

        const hitSquare = this.state.p2LocationArray[i];
        p1AttackArray[i] = hitSquare === null ? "O" : "X";
        const hitCount = hitSquare === null ? 0 : 1;
        this.setState({
            p1AttackArray: p1AttackArray,
            p1IsNext: !this.state.p1IsNext,
            p1Hit: this.state.p1Hit + hitCount
        })
    }

    handleP2ClickInGame = (i) => {

        const p2AttackArray = this.state.p2AttackArray.slice();

        if (this.state.p1IsNext || p2AttackArray[i] || this.determineWinner()) {
            return;
        }

        const hitSquare = this.state.p1LocationArray[i];
        p2AttackArray[i] = hitSquare === null ? "O" : "X";
        const hitCount = hitSquare === null ? 0 : 1;
        this.setState({
            p2AttackArray: p2AttackArray,
            p1IsNext: !this.state.p1IsNext,
            p2Hit: this.state.p2Hit + hitCount
        })
    }

    determineWinner = () => {
        if (this.state.p1Hit === 5) {
            return "1";
        } else if (this.state.p2Hit === 5) {
            return "2";
        } else {
            return null;
        }
    }
    

    render () {

        const winner = this.determineWinner();
        let status;

        if (winner) {
            status = "Player " + (winner) + " Wins!!";
        } else {
            status =  "Next Player: " + ( this.state.p1IsNext ? "Player 1" : "Player 2" );
        }

        return (
            <div>
                {
                    this.state.gameStarted ?
                        <div>
                            <h3>{ status }</h3>
                            <h3>Player 1</h3>
                            <div>
                                <Board value={ this.renderP1SquaresInGame } />
                            </div>

                            <h3>Player 2</h3>
                            <div>
                                <Board value={ this.renderP2SquaresInGame } />
                            </div>
                        </div>
                    :
                        <div>
                            <header><h1>Welcome to Battleship!</h1></header>
                            
                            <h3>Player 1</h3>
                            <p>Please select ship locations</p>
                            <div>
                                <Board value={ this.renderP1SquaresInitial } />
                            </div>

                            <h3>Player 2</h3>
                            <p>Please select ship locations, then click Start Game</p>
                            <div>
                                <Board value={ this.renderP2SquaresInitial } />
                            </div>
                            
                            <input type="submit" className="startGame" onClick={ this.startGame } value="Start Game"></input>
                        </div>
                }
            </div>
        )
    }
}

export default BattleshipHome;