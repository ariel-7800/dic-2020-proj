import React from "react"
import Square from "./Square"
import Board from "./Board"
import ship2 from "./images/ship2.png"
import ship3a from "./images/ship3a.png"
import ship3b from "./images/ship3b.png"
import ship4 from "./images/ship4.png"
import ship5 from "./images/ship5.png"
import './battleship.css'

class BattleshipHome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,
            p1IsNext: true,
            p1LocationArray: Array(49).fill(null),
            p2LocationArray: Array(49).fill(null),
            p1Ships: 0,
            p2Ships: 0,
            p1SelectedShip: null,
            p2SelectedShip: null,
            p1ShipLocations: Array(5).fill(null),
            p2ShipLocations: Array(5).fill(null),

            p1AttackArray: Array(49).fill(null),
            p2AttackArray: Array(49).fill(null),
            p1Hit: 0,
            p2Hit: 0
        };
    }

    startGame = (event) => {
        event.preventDefault();
        if (this.state.p1Ships !== 17 || this.state.p2Ships !== 17) {
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
        //initial setup
        const p1LocationArray = this.state.p1LocationArray.slice();
        const p1ShipLocations = this.state.p1ShipLocations.slice();
        const selectedSquare = p1LocationArray[i];
        const { p1SelectedShip } = this.state;
        let iters;
        let locationLookup;
        switch(p1SelectedShip) {
            case "ship2":
                iters = 2;
                locationLookup = 0;
                break;
            case "ship3a":
                iters = 3;
                locationLookup = 1;
                break;
            case "ship3b":
                iters = 3;
                locationLookup = 2;
                break;
            case "ship4":
                iters = 4;
                locationLookup = 3;
                break;
            case "ship5":
                iters = 5;
                locationLookup = 4;
                break;
            default:
                break;
        }

        //early outs
        if (this.state.p1Ships >= 17 && (selectedSquare === null)) {
            return;
        }
        if (p1SelectedShip === null) {
            return
        }
        const range = p1ShipLocations[locationLookup];
        if (range && (i < range[0] || i > range[1])) {
            return;
        }
        

        //if adding ship
        if (selectedSquare === null) {
            const maxLength = 7 - ((i) % 7);
            if (maxLength < iters) {
                return;
            }
            for (let j = 0; j < iters; j++) {
                if (p1LocationArray[i + j] === "X") {
                    return;
                }
            }
            for (let j = 0; j < iters; j++) {
                p1LocationArray[i + j] = "X";
            }
            p1ShipLocations[locationLookup] = [i, i + iters - 1];
            this.setState({
                p1LocationArray: p1LocationArray,
                p1Ships: this.state.p1Ships + iters,
                p1ShipLocations: p1ShipLocations
            })


        //if removing ship
        } else {
            let init;
            let end;
            let curr = 0;
            for (let val of p1ShipLocations) {
                if (val && i >= val[0] && i <= val[1]) {
                    init = val[0];
                    end = val[1];
                    break;
                }
                curr++;
            }
            p1ShipLocations[curr] = null;

            const size = end - init + 1;
            for (let j = init; j <= end; j++) {
                p1LocationArray[j] = null;
            }

            this.setState({
                p1LocationArray: p1LocationArray,
                p1Ships: this.state.p1Ships - size,
                p1ShipLocations: p1ShipLocations
            }) 
        }
    }
    
    handleP2ClickInitial = (i) => {
        //initial setup
        const p2LocationArray = this.state.p2LocationArray.slice();
        const p2ShipLocations = this.state.p2ShipLocations.slice();
        const selectedSquare = p2LocationArray[i];
        const { p2SelectedShip } = this.state;
        let iters;
        let locationLookup;
        switch(p2SelectedShip) {
            case "ship2":
                iters = 2;
                locationLookup = 0;
                break;
            case "ship3a":
                iters = 3;
                locationLookup = 1;
                break;
            case "ship3b":
                iters = 3;
                locationLookup = 2;
                break;
            case "ship4":
                iters = 4;
                locationLookup = 3;
                break;
            case "ship5":
                iters = 5;
                locationLookup = 4;
                break;
            default:
                break;
        }

        //early outs
        if (this.state.p2Ships >= 17 && (selectedSquare === null)) {
            return;
        }
        if (p2SelectedShip === null) {
            return
        }
        const range = p2ShipLocations[locationLookup];
        if (range && (i < range[0] || i > range[1])) {
            return;
        }
        

        //if adding ship
        if (selectedSquare === null) {
            const maxLength = 7 - ((i) % 7);
            if (maxLength < iters) {
                return;
            }
            for (let j = 0; j < iters; j++) {
                if (p2LocationArray[i + j] === "X") {
                    return;
                }
            }
            for (let j = 0; j < iters; j++) {
                p2LocationArray[i + j] = "X";
            }
            p2ShipLocations[locationLookup] = [i, i + iters - 1];
            this.setState({
                p2LocationArray: p2LocationArray,
                p2Ships: this.state.p2Ships + iters,
                p2ShipLocations: p2ShipLocations
            })


        //if removing ship
        } else {
            let init;
            let end;
            let curr = 0;
            for (let val of p2ShipLocations) {
                if (val && i >= val[0] && i <= val[1]) {
                    init = val[0];
                    end = val[1];
                    break;
                }
                curr++;
            }
            p2ShipLocations[curr] = null;

            const size = end - init + 1;
            for (let j = init; j <= end; j++) {
                p2LocationArray[j] = null;
            }

            this.setState({
                p2LocationArray: p2LocationArray,
                p2Ships: this.state.p2Ships - size,
                p2ShipLocations: p2ShipLocations
            }) 
        }
    }

    handleP1Selected = (ship) => {
        this.setState({
            p1SelectedShip: ship
        })
    }

    handleP2Selected = (ship) => {
        this.setState({
            p2SelectedShip: ship
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
        if (this.state.p1Hit === 17) {
            return "1";
        } else if (this.state.p2Hit === 17) {
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
                                <img src={ship2} alt="ship2" onClick = {() => this.handleP1Selected("ship2")} className={this.state.p1SelectedShip === "ship2" ? "withBorder" : "noBorder"} />
                                <img src={ship3a} alt="ship3a" onClick = {() => this.handleP1Selected("ship3a")} className={this.state.p1SelectedShip === "ship3a" ? "withBorder" : "noBorder"} />
                                <img src={ship3b} alt="ship3b" onClick = {() => this.handleP1Selected("ship3b")} className={this.state.p1SelectedShip === "ship3b" ? "withBorder" : "noBorder"} />
                                <img src={ship4} alt="ship4" onClick = {() => this.handleP1Selected("ship4")} className={this.state.p1SelectedShip === "ship4" ? "withBorder" : "noBorder"} />
                                <img src={ship5} alt="ship5" onClick = {() => this.handleP1Selected("ship5")} className={this.state.p1SelectedShip === "ship5" ? "withBorder" : "noBorder"} />
                            </div>

                            <h3>Player 2</h3>
                            <p>Please select ship locations, then click Start Game</p>
                            <div>
                                <Board value={ this.renderP2SquaresInitial } />
                                <img src={ship2} alt="ship2" onClick = {() => this.handleP2Selected("ship2")} className={this.state.p2SelectedShip === "ship2" ? "withBorder" : "noBorder"} />
                                <img src={ship3a} alt="ship3a" onClick = {() => this.handleP2Selected("ship3a")} className={this.state.p2SelectedShip === "ship3a" ? "withBorder" : "noBorder"} />
                                <img src={ship3b} alt="ship3b" onClick = {() => this.handleP2Selected("ship3b")} className={this.state.p2SelectedShip === "ship3b" ? "withBorder" : "noBorder"} />
                                <img src={ship4} alt="ship4" onClick = {() => this.handleP2Selected("ship4")} className={this.state.p2SelectedShip === "ship4" ? "withBorder" : "noBorder"} />
                                <img src={ship5} alt="ship5" onClick = {() => this.handleP2Selected("ship5")} className={this.state.p2SelectedShip === "ship5" ? "withBorder" : "noBorder"} />
                            </div>
                            
                            <input type="submit" className="startGame" onClick={ this.startGame } value="Start Game"></input>
                            
                        </div>
                }
            </div>
        )
    }
}

export default BattleshipHome;