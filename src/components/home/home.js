import React from "react"
import ConnectHome from "../connect4/ConnectHome";
import BattleshipHome from "../battleship/BattleshipHome";
import Checkers  from "../checkers/Board";
import "./home.css"


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentGame: null,
        };
    }
    
    launchBattleShip = (event) => {
        event.preventDefault();
        this.setState({
            currentGame: "Battleship"
        });
    };

    launchConnect4 = (event) => {
        event.preventDefault();
        this.setState({
            currentGame: "Connect4"
        });
    };

    launchCheckers = (event) => {
        event.preventDefault();
        this.setState({
            currentGame: "Checkers"
        });
    };

    goHome = (event) => {
        event.preventDefault();
        this.setState({
            currentGame: null
        })
    } 

    render () {
        return (
                <div className="home-container">
                    <div className="home-text-container">
                    {
                        this.state.currentGame === null ? 
                            <div>
                                <h1>Welcome to David and Ariel's Game Center!</h1>
                                <input type="submit" className="button" value="Connect4" onClick={this.launchConnect4}/>
                                <input type="submit" className="button" value = "Battleship" onClick={this.launchBattleShip}/>
                                <input type="submit" className="button" value = "Checkers" onClick={this.launchCheckers}/>
                            </div>
                        :
                            <div>
                                { this.state.currentGame === "Connect4" ? <ConnectHome/> : this.state.currentGame === "Checkers" ? <Checkers/> : <BattleshipHome/> }
                                <input className="go-back" type="submit" value="Go to Home" onClick={this.goHome}/>
                            </div>

                    }
                    </div>
                    <div class="home-background-shader"></div>
                </div>
            
        )
    }
}

export default Home;